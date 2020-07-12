package com.codingdojo.thecode.controller;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class TheCodeController {
	
	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}
	@RequestMapping(value="/process", method=RequestMethod.POST)
	public String process(@RequestParam(value="code") String code, HttpSession session) {
		session.setAttribute("code", code);
		System.out.println(code);
		return "redirect:/code";
	}
	@RequestMapping("/code") 
	public String code(HttpSession session) {
		String code = (String) session.getAttribute("code");
		System.out.println(code);
		if(code.equals("bushido")) {
			return "code.jsp";
		}
		return "redirect:/createError";
	}
	@RequestMapping("/createError")
	public String flashMesage(RedirectAttributes redirectAttributes){
		redirectAttributes.addFlashAttribute("error", "You must train harder!");
		return "redirect:/";
		
	}
}
