package com.jesus.projectmanager.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="First name is required.")
	String firstname;
	
	@NotBlank(message="Last name is required.")
	String lastname;
	
	@NotBlank(message="Email is required.")
	@Email(message="Email must be valid")
	private String email;
	
	@Size(min=5, message="Password must be greater than 5 characters")
	private String password;
	
	@Transient
	private String passwordConfirmation;
	
	@Column(updatable=false)
	private Date createdAt;
	private Date updatedAt;
	
	@OneToMany(mappedBy="projectCreator", fetch = FetchType.LAZY)
	private List<Project> projectsCreated;
	
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "members_projects", 
        joinColumns = @JoinColumn(name = "member_id"), 
        inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private List<Project> projects;
	
	
	
	@OneToMany(mappedBy="taskCreator", fetch = FetchType.LAZY)
	private List<Task> tasksCreated;
	
	@OneToMany(mappedBy="assignee", fetch = FetchType.LAZY)
	private List<Task> tasksAssigned;

	public User() {
		
	}

	public User(Long id, String firstname, String lastname, String email, String password, String passwordConfirmation) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.passwordConfirmation = passwordConfirmation;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}

	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Project> getProjectsCreated() {
		return projectsCreated;
	}

	public void setProjectsCreated(List<Project> projectsCreated) {
		this.projectsCreated = projectsCreated;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public List<Task> getTasksCreated() {
		return tasksCreated;
	}

	public void setTasksCreated(List<Task> tasksCreated) {
		this.tasksCreated = tasksCreated;
	}

	public List<Task> getTasksAssigned() {
		return tasksAssigned;
	}

	public void setTasksAssigned(List<Task> tasksAssigned) {
		this.tasksAssigned = tasksAssigned;
	}

	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	
	    
}
	    