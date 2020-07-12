package com.jesus.projectmanager.controllers;

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
import org.springframework.web.bind.annotation.RequestParam;

import com.jesus.projectmanager.models.Project;
import com.jesus.projectmanager.models.User;
import com.jesus.projectmanager.services.ProjectService;
import com.jesus.projectmanager.services.UserService;

@Controller
public class ProjectsController {
	
	private final UserService userService;
	private final ProjectService projectService;
	
	public ProjectsController(UserService userService, ProjectService projectService ) {
		this.userService = userService;
        this.projectService = projectService;
    }
	@RequestMapping("/projects")
	public String projects(@ModelAttribute("user") User user, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		System.out.println(userId);
		User u = userService.findUserById(userId);
    	model.addAttribute("user", u);
		List <Project> projects = projectService.allProjects();
		model.addAttribute("projects", projects);
		return "/projectmanager/projects.jsp";
		}
		
	@RequestMapping("/projects/new")
	public String newProject(@ModelAttribute("project") Project project, Model model) {
		//List<User> users = userService.allUsers();
		//model.addAttribute("users", users);
		return "/projectmanager/newProject.jsp";
		}
	@RequestMapping(value="/projects", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("project") Project project, BindingResult result, HttpSession session) {
        if (result.hasErrors()) {
        	return "/projectmanager/newProject.jsp";
        } else {
        	Long id = (Long) session.getAttribute("userId");
        	User creator = userService.findUserById(id);
            project.setProjectCreator(creator);;
            projectService.createProject(project);
            Long projectId = project.getId();
            return "redirect:/projects/" + Long.toString(projectId) + "/members"; 
        	}
		}
	
	@RequestMapping("/projects/{id}")
		public String project(@PathVariable("id") Long id, Model model) {
			Project project = projectService.findProject(id); 
			model.addAttribute("project", project);
			model.addAttribute("projectTasks", projectService.findProject(id).getProjectTasks());
			model.addAttribute("teamMembers", projectService.findProject(id).getMembers());
			return "/projectmanager/projectInfo.jsp";
		}
	
	
	@RequestMapping("/projects/{id}/members")
	public String task(@PathVariable("id") Long id, Model model) {
		Project project = projectService.findProject(id); 
		model.addAttribute("project", project);
		List <User> teamMembers = projectService.findProject(id).getMembers();
		model.addAttribute("teamMembers", teamMembers);
		List <User> members = userService.allUsers();
		model.addAttribute("members", members);
		return "/projectmanager/projectDetail.jsp";
	}
	
	@RequestMapping(value="/projects/{id}/add")
	public String add(@PathVariable("id") Long id, @RequestParam("members") Long memberId) {
		Project project = projectService.findProject(id); 
		User member = userService.findUserById(memberId);   
		project.getMembers().add(member);
		projectService.createProject(project);
		return "redirect:/projects/"+ Long.toString(id)+"/members";
	}
	
	@RequestMapping(value="/projects/{id}/delete", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id){
		projectService.deleteProject(id);
		return "redirect:/projects";
	}
	
	/*@RequestMapping("/projects/{id}/edit")
	public String (@PathVariable("id") Long id){
		projectService.deleteProject(id);
		return "redirect:/projects";
	}*/
		
}
