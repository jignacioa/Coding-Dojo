package com.example.taskmanager.controllers;

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

import com.example.taskmanager.models.Task;
import com.example.taskmanager.models.User;
import com.example.taskmanager.services.TaskService;
import com.example.taskmanager.services.UserService;

@Controller 
public class TasksController {
	private final UserService userService;
	private final TaskService taskService;
	
	public TasksController(UserService userService, TaskService taskService) {
        this.userService = userService;
        this.taskService = taskService;
    }
    
	@RequestMapping("/tasks")
    public String home(HttpSession session, Model model) {
    	Long userId = (Long) session.getAttribute("userId");
    	User u = userService.findUserById(userId);
    	model.addAttribute("user", u);
    	List<Task> tasks = taskService.allTasks();
    	model.addAttribute("tasks", tasks);
    	return "/taskmanager/tasks.jsp";
    }
	@RequestMapping("/tasks/new")
	public String newDojo(@ModelAttribute("task") Task task, Model model) {
		List<User> users = userService.allUsers();
		model.addAttribute("users", users);
		return "/taskmanager/newtask.jsp";
	}
	@RequestMapping(value="/tasks", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("task") Task task, BindingResult result, HttpSession session) {
        if (result.hasErrors()) {
        	return "/taskmanager/newtask.jsp";
        } else {
        	Long id = (Long) session.getAttribute("userId");
        	User creator = userService.findUserById(id);
            task.setUser(creator);
            taskService.createTask(task);
            return "redirect:/tasks";
        }
    }
	@RequestMapping("/tasks/{id}")
	public String task(@PathVariable("id") Long id, Model model) {
		Task task = taskService.findTask(id); 
		model.addAttribute("task", task);
		return "/taskmanager/taskdetail.jsp";
		}
	@RequestMapping("tasks/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Task task = taskService.findTask(id);
        model.addAttribute("task", task);
        List<User> users = userService.allUsers();
		model.addAttribute("users", users);
        return "/taskmanager/edit.jsp";
	}
	@RequestMapping(value="/tasks/{id}", method=RequestMethod.PUT)
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
	public String destroy(@PathVariable("id") Long id) {
		taskService.deleteTask(id);
		return "redirect:/tasks";
	}
}
