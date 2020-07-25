package com.jesus.projectmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.jesus.projectmanager.models.User;
import com.jesus.projectmanager.services.UserService;

@Controller
public class UsersController {
	private final UserService userService;
    
    public UsersController(UserService userService) {
        this.userService = userService;
    }
    
    @RequestMapping("/register")
    public String registerForm(@ModelAttribute("user") User user) {
        return "/projectmanager/reg_log.jsp";
    }
    
    @RequestMapping("/")
    public String loginForm(@ModelAttribute("user") User user) {
        return "/projectmanager/login.jsp";
    }
    
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	if(result.hasErrors()) {
        	return "/projectmanager/reg_log.jsp";
        }
        User u = userService.registerUser(user);
        session.setAttribute("userId", u.getId());
        return "redirect:/projects";
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session, @ModelAttribute("user") User user) {
        boolean isAuthenticated = userService.authenticateUser(email, password);
        if(isAuthenticated) {
        	User u = userService.findByEmail(email);
        	session.setAttribute("userId", u.getId());
        	 return "redirect:/projects";
        } else {
        	model.addAttribute("error", "Invalid Credentials!");
        	return "/projectmanager/reg_log.jsp";
        }
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
    
    
}