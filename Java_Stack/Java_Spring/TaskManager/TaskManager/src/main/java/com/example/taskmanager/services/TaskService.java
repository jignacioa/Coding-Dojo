package com.example.taskmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.taskmanager.models.Task;
import com.example.taskmanager.repositories.TaskRepository;

@Service
public class TaskService {
	private final TaskRepository taskRepository;

	public TaskService(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	public List<Task> allTasks() {
		 return taskRepository.findAll();
   }
	public Task createTask(Task task) {
        return taskRepository.save(task);
	}
	public Task findTask(Long id) {
		Optional <Task> task = taskRepository.findById(id);
		if(task.isPresent()) {
            return task.get();
        } else {
            return null;
        }
	}
	public Task updateTask(Long id, String task, String assignee, String priority) {
    	Optional<Task> toUpdate = taskRepository.findById(id);
    	if(toUpdate != null) {
    		toUpdate.get().setTask(task);
    		toUpdate.get().setAssignee(assignee);
    		toUpdate.get().setPriority(priority);
    		Task t = toUpdate.get();
    		taskRepository.save(t);
    		return toUpdate.get();
    	}
    	return null;
    }
	public void deleteTask(Long id) {
		taskRepository.deleteById(id);
	}
}
