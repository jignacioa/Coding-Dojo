package com.codingdojo.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.dojosninjas.models.Dojo;
import com.codingdojo.dojosninjas.models.Ninja;
import com.codingdojo.dojosninjas.services.DojoService;
import com.codingdojo.dojosninjas.services.NinjaService;

@Controller 
public class NinjasController {
	
	private final NinjaService ninjaService;
	private final DojoService dojoService;
    
	public NinjasController(NinjaService ninjaService, DojoService dojoService) {
	        this.ninjaService = ninjaService;
	        this.dojoService = dojoService;
	}
	@RequestMapping("/ninjas/new")
	public String newDojo(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "/dojosandninjas/newninja.jsp";
	}
	@RequestMapping(value="/ninjas", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
        if (result.hasErrors()) {
            return "/dojosandninjas/newninja.jsp";
        } else {
            ninjaService.createNinja(ninja);
            return "redirect:/dojos/new";
        }
    }
	
	    

}

