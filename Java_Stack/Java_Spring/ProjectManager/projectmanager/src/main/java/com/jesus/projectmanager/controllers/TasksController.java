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

import com.jesus.projectmanager.models.Task;
import com.jesus.projectmanager.models.User;
import com.jesus.projectmanager.services.ProjectService;
import com.jesus.projectmanager.services.TaskService;
import com.jesus.projectmanager.services.UserService;

@Controller 
public class TasksController {
	private final UserService userService;
	private final TaskService taskService;
	private final ProjectService projectService;
	
	public TasksController(UserService userService, TaskService taskService, ProjectService projectService) {
        this.userService = userService;
        this.taskService = taskService;
        this.projectService = projectService;
    }
    
	/*@RequestMapping("/projects/{id}/tasks")
    public String home(HttpSession session, Model model) {
    	Long userId = (Long) session.getAttribute("userId");
    	User u = userService.findUserById(userId);
    	model.addAttribute("user", u);
    	List<Task> tasks = taskService.allTasks();
    	model.addAttribute("tasks", tasks);
    	return "/taskmanager/tasks.jsp";
    }*/
	
	@RequestMapping("/projects/{id}/tasks/add")
	public String createTask(@PathVariable("id") Long id, Model model, HttpSession session) {
		Task task = new Task();
		model.addAttribute("task", task);
		model.addAttribute("userId", session.getAttribute("userId"));
		model.addAttribute("project", projectService.findProject(id));
		model.addAttribute("assignees", projectService.findProject(id).getMembers());
		model.addAttribute("projectTasks", projectService.findProject(id).getProjectTasks());
		return "/projectmanager/newTask.jsp";
	}
	@RequestMapping(value="/projects/tasks/new", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("task") Task task, BindingResult result, @RequestParam("project.id") Long projId) {
        if (result.hasErrors()) {
        	return "/projectmanager/newTask.jsp";
        } else {
        	taskService.createTask(task);           
            return "redirect:/projects/" + Long.toString(projId) + "/tasks/add";
        }
    }
	
	@RequestMapping("/projects/{id}/tasks/{task_id}/edit")
	public String task(@PathVariable("task_id") Long task_id, @PathVariable("id") Long id, Model model) {
		Task task = taskService.findTask(task_id); 
		model.addAttribute("task", task);
		model.addAttribute("assignees", projectService.findProject(id).getMembers());
		return "/projectmanager/editTask.jsp";
		}
	/*@RequestMapping("projecttasks/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Task task = taskService.findTask(id);
        model.addAttribute("task", task);
        List<User> users = userService.allUsers();
		model.addAttribute("users", users);
        return "/taskmanager/edit.jsp";
	}*/
	@RequestMapping(value="/tasks/${task.id}/edit", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("task") Task task, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	List<User> users = userService.allUsers();
    		model.addAttribute("users", users);
            return "/taskmanager/edit.jsp";
        } else {
            taskService.updateTask(task.getId(), task.getTask(), task.getAssignee(), task.getPriority());
            Long id = task.getId();
            return "redirect:/tasks/" + Long.toString(id);
        }
	}
	
	@RequestMapping(value="/tasks/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id, @RequestParam("project") Long projectId) {
		taskService.deleteTask(id);
		return "redirect:/projects/" + Long.toString(projectId);
	}
}