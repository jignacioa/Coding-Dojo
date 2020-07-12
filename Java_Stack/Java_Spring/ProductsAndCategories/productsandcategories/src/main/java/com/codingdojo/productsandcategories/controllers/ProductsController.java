package com.codingdojo.productsandcategories.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;
import com.codingdojo.productsandcategories.services.ProductService;

@Controller
@RequestMapping("/products")
public class ProductsController {
	
	@Autowired
	CategoryService categoryService;
	@Autowired
	ProductService productService;
	
	@GetMapping("/new")
	public String newProduct(@ModelAttribute("product") Product product, Model model) {
		return "productsandcategories/newProduct.jsp";
	}
	@PostMapping(value="/newproduct")
	public String create(@Valid @ModelAttribute("product") Product product, BindingResult result, Model model) {
	    if (result.hasErrors()) {
	        return "redirect:/products/new";
	    } else {
	        productService.createProduct(product);
	        return "redirect:/products/new";
	    }
	}
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		model.addAttribute("product", productService.findProduct(id));
		model.addAttribute("categories", productService.findProduct(id).getCategories());
		List<Category> cat = categoryService.allCategories();
		model.addAttribute("allCategories", cat);
		return "productsandcategories/product.jsp";
	}
	@PostMapping("/{id}/add")
	public String add(@PathVariable("id") Long id, @RequestParam("categories") Long categoryId) {
		Product newProduct = productService.findProduct(id);
		Category newCategory = categoryService.findCategory(categoryId);
		newProduct.getCategories().add(newCategory);
		productService.createProduct(newProduct);
		return "redirect:/products/"+id;
	}
}
