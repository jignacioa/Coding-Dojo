package com.codingdojo.relationships.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.relationships.models.License;
import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.services.LicenseService;
import com.codingdojo.relationships.services.PersonService;

@Controller
public class PersonsController {
	private final PersonService personService;
	private final LicenseService licenseService;
    
	public PersonsController(PersonService personService, LicenseService licenseService) {
	        this.personService = personService;
	        this.licenseService = licenseService;
	    }
	@RequestMapping("/persons/new")
	public String newPerson(@ModelAttribute("person") Person person) {
		return "/relationships/personform.jsp";
	}
	@RequestMapping(value="/persons", method=RequestMethod.POST)
	 public String create(@Valid @ModelAttribute("person") Person person, BindingResult result) {
        if (result.hasErrors()) {
            return "/relationships/personform.jsp";
        } else {
            personService.createPerson(person);
            return "redirect:/licenses/new";
        }
    }
	@RequestMapping("/persons/{id}")
	public String onePerson(@PathVariable("id") Long id, Model model) {
			License license = licenseService.findLicense(id); 
			model.addAttribute("license", license);
			return "/relationships/driverlicense.jsp";
	}
	
}	