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
@RequestMapping("/categories")
public class CategoriesController {
	
	@Autowired
	CategoryService categoryService;
	@Autowired
	ProductService productService;
	
	@GetMapping("/new")
	public String newCategory(@ModelAttribute("category") Category category, Model model) {
		return "productsandcategories/newCategory.jsp";
	}
	@PostMapping(value="/newcategory")
	public String create(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {
	    if (result.hasErrors()) {
	        return "redirect:/categories/new";
	    } else {
	        categoryService.createCategory(category);
	        return "redirect:/categories/new";
	    }
	}
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		model.addAttribute("category", categoryService.findCategory(id));
		model.addAttribute("products", categoryService.findCategory(id).getProducts());
		List<Product> prod = productService.allProducts();
		model.addAttribute("allProducts", prod);
		return "productsandcategories/category.jsp";
	}
	@PostMapping("/{id}/add")
	public String add(@PathVariable("id") Long id, @RequestParam("products") Long productId) {
		Category newCategory = categoryService.findCategory(id);
		Product newProduct = productService.findProduct(productId);
		newCategory.getProducts().add(newProduct);
		categoryService.createCategory(newCategory);
		return "redirect:/categories/"+id;
	}

}
