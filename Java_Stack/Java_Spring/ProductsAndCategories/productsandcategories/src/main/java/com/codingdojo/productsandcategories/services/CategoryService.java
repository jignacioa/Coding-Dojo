package com.codingdojo.productsandcategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.repositories.CategoryRepository;
import com.codingdojo.productsandcategories.repositories.ProductRepository;

@Service
public class CategoryService {
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	
	public List<Category> allCategories(){
		return (List<Category>) categoryRepository.findAll();
	}
	public Category createCategory(Category d) { 
	    return categoryRepository.save(d);
	}
	public Category findCategory(Long id) {
	    Optional<Category> category = categoryRepository.findById(id);
	    if(category.isPresent()) {
	        return category.get();
	    } 
	    else {
	        return null;
	    }
	}
	public List<Category> getCategoryProducts(Long id){
        List<Category> allC = this.allCategories();        
        Optional<Product> product = productRepository.findById(id);        
        if(product.isPresent()) {
            List<Category> categoryProducts = product.get().getCategories();        
            allC.removeAll(categoryProducts);
            return allC;
        }else {
            return null;
        }
    }

	public void deleteCategory(Long id) {
		categoryRepository.deleteById(id);	
	}
	public Category updateCategory(Category category) {
		return categoryRepository.save(category);
	}
	
}