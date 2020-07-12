package com.codingdojo.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.dojosninjas.models.Dojo;
import com.codingdojo.dojosninjas.models.Ninja;
import com.codingdojo.dojosninjas.services.DojoService;

@Controller
public class DojosController {
	
	private final DojoService dojoService;
    
	public DojosController(DojoService dojoService) {
	        this.dojoService = dojoService;
	}
	@RequestMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "/dojosandninjas/newdojo.jsp";
	}
	@RequestMapping(value="/dojos", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
        if (result.hasErrors()) {
            return "/dojosandninjas/newdojo.jsp";
        } else {
            dojoService.createDojo(dojo);
            Long id = dojo.getId();
            return "redirect:/dojos/" + Long.toString(id);
        }
    }
	@RequestMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
			Dojo dojo = dojoService.findDojo(id); 
			model.addAttribute("dojo", dojo);
			List<Ninja> ninjas = dojo.getNinjas();
			model.addAttribute("ninjas", ninjas);
			return "/dojosandninjas/dojo.jsp";
	}
	      
}
