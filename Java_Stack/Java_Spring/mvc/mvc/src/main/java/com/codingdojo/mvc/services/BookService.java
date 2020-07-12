package com.codingdojo.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.mvc.models.Book;
import com.codingdojo.mvc.repositories.BookRepository;

@Service    //our business logic. the way controllers will comm. with db via services
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
		
	}
	// returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    public Book updateBook(Long id, String title, String description, String language, Integer numOfPages) {
    	Optional<Book> bookUpdate = bookRepository.findById(id);
    	if(bookUpdate != null) {
    		bookUpdate.get().setTitle(title);
    		bookUpdate.get().setDescription(description);
    		bookUpdate.get().setLanguage(language);
    		bookUpdate.get().setNumberOfPages(numOfPages);
    		Book b = bookUpdate.get();
    		bookRepository.save(b);
    		return bookUpdate.get();
    	}
    	return null;
    }
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    }
}
