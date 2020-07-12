package com.jesus.projectmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jesus.projectmanager.models.Project;
import com.jesus.projectmanager.repositories.ProjectRepository;

@Service
public class ProjectService {
	private final ProjectRepository projectRepository;

	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}
	
	public List<Project> allProjects() {
		 return projectRepository.findAll();
	}
	
	public Project createProject(Project project) {
        return projectRepository.save(project);
	}
	public Project findProject(Long id) {
		Optional <Project> project = projectRepository.findById(id);
		if(project.isPresent()) {
            return project.get();
        } else {
            return null;
        }
	}
	
	public void deleteProject(Long id) {
		projectRepository.deleteById(id);
	}
}
