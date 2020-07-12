package com.codingdojo.javaexam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.javaexam.models.Idea;
import com.codingdojo.javaexam.models.User;
import com.codingdojo.javaexam.services.IdeaService;
import com.codingdojo.javaexam.services.UserService;

@Controller
public class IdeasController {
	private final UserService userService;
	private final IdeaService ideaService;
	
	public IdeasController(UserService userService, IdeaService ideaService) {
        this.userService = userService;
        this.ideaService = ideaService;
    }
    
	@RequestMapping("/ideas")
    public String home(HttpSession session, Model model) {
    	Long userId = (Long) session.getAttribute("userId");
    	User u = userService.findUserById(userId);
    	model.addAttribute("user", u);
    	List<Idea> ideas = ideaService.allIdeas();
    	model.addAttribute("ideas", ideas);
    	return "/ideas/ideasList.jsp";
    }
	@RequestMapping("/ideas/new")
	public String newDojo(@ModelAttribute("idea") Idea idea, Model model) {
		return "/ideas/newIdea.jsp";
	}
	@RequestMapping(value="/ideas", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("idea") Idea idea, BindingResult result, HttpSession session) {
        if (result.hasErrors()) {
        	return "/ideas/newIdea.jsp";
        } else {
        	Long id = (Long) session.getAttribute("userId");
        	User creator = userService.findUserById(id);
            idea.setUser(creator);
            ideaService.createIdea(idea);
            Long itemid = idea.getId();
            return "redirect:/ideas/" + Long.toString(itemid);
        }
	}
	@RequestMapping("/ideas/{id}")
	public String task(@PathVariable("id") Long id, Model model) {
		Idea idea = ideaService.findIdea(id); 
		model.addAttribute("idea", idea);
		return "/ideas/ideaDetail.jsp";
	}
	
	@RequestMapping("ideas/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Idea idea = ideaService.findIdea(id);
        model.addAttribute("idea", idea);
        return "/ideas/editIdea.jsp";
	}
	@RequestMapping(value="/ideas/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("idea") Idea idea, BindingResult result, Model model, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
        	Idea rerender = ideaService.findIdea(id);
        	 model.addAttribute("idea", rerender);
        	 model.addAttribute("error", "Edit must not be empty!");
            return "/ideas/editIdea.jsp";
        } else {
            ideaService.updateIdea(idea.getId(), idea.getIdea());
            Long itemid = idea.getId();
            return "redirect:/ideas/" + Long.toString(itemid);
        }
	}
	@RequestMapping(value="/ideas/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		ideaService.deleteIdea(id);
		return "redirect:/ideas";
	}
}
