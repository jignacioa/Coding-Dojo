package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
//Contorller allows us to repsond with a template 
@Controller
public class HelloHuman {
	@RequestMapping("/")
	public String home(Model model) { //use model object, uses map-interface to expose key-value pair
		model.addAttribute("dojoName", "Burbank"); 
		return "index.jsp";
	}

}
