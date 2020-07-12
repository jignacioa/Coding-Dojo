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
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	
	public List<Product> allProducts(){
		return (List<Product>) productRepository.findAll();
	}
	public Product createProduct(Product p) { 
	    return productRepository.save(p);
	}
	public Product findProduct(Long id) {
	    Optional<Product> product = productRepository.findById(id);
	    if(product.isPresent()) {
	        return product.get();
	    } 
	    else {
	        return null;
	    }
	}
	public List<Product> getProductCategories(Long id){
        List<Product> allP = this.allProducts();        
        Optional<Category> category = categoryRepository.findById(id);        
        if(category.isPresent()) {
            List<Product> categoryProducts = category.get().getProducts();        
            allP.removeAll(categoryProducts);
            return allP;
        }else {
            return null;
        }
    }
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);	
	}
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}
	
}
