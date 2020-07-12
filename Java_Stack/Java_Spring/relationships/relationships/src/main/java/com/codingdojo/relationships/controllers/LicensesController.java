package com.codingdojo.relationships.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.relationships.models.License;
import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.services.LicenseService;
import com.codingdojo.relationships.services.PersonService;

@Controller
public class LicensesController {
	private final LicenseService licenseService;
	private final PersonService personService;
    
	public LicensesController(LicenseService licenseService, PersonService personService) {
	        this.licenseService = licenseService;
	        this.personService = personService;
	    }
	@RequestMapping("/licenses/new")
	public String newLicense(@ModelAttribute("license") License license, Model model) {
		List<Person> persons = personService.allPersons();
		model.addAttribute("persons", persons);
		return "/relationships/licenseform.jsp";
	}
	@RequestMapping(value="/licenses", method=RequestMethod.POST)
	 public String create(@RequestBody @Valid @ModelAttribute("license") License license, @RequestParam(value="expirationDate") String date, BindingResult result) throws ParseException {  	
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
 			Date expirationDate = dateFormat.parse(date);
 			license.setExpirationDate(expirationDate);
		if (result.hasErrors()) {
           return "/relationships/licenseform.jsp";
       } else {
    	   String number = licenseService.createLicenseNumber();
    	   license.setNumber(number);
           licenseService.createLicense(license);
           Long id = license.getId();
           return "redirect:/persons/" + Long.toString(id);
       }
	}
	
}
