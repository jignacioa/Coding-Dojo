package com.jesus.projectmanager.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;



@Entity
@Table(name="projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message="Project name must not be blank")
    private String project;
    
    @NotBlank(message="Please provide a brief description")
    private String description;
    
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="projectCreatorId")
    private User projectCreator;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "members_projects", 
        joinColumns = @JoinColumn(name = "project_id"), 
        inverseJoinColumns = @JoinColumn(name = "member_id")
    )
    private List<User> members;
    
    /*private List<Category> categories;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="memberId")
    private User member;*/
    
    
    @OneToMany(mappedBy="project", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	private List<Task> projectTasks;
    
    
    
    
    public Project() {
	}
    
    
	public Project(Long id, @NotBlank(message = "Project name must not be blank") String project,
			@NotBlank(message = "Please provide a brief description") String description) {
		super();
		this.id = id;
		this.project = project;
		this.description = description;
	}
	
	
	
	/*public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getProject() {
		return project;
	}


	public void setProject(String project) {
		this.project = project;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
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


	public User getProjectCreator() {
		return projectCreator;
	}


	public void setProjectCreator(User projectCreator) {
		this.projectCreator = projectCreator;
	}


	public User getMember() {
		return member;
	}


	public void setMember(User member) {
		this.member = member;
	}


	public List<Task> getProjectTasks() {
		return projectTasks;
	}


	public void setProjectTasks(List<Task> projectTasks) {
		this.projectTasks = projectTasks;
	}*/


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getProject() {
		return project;
	}


	public void setProject(String project) {
		this.project = project;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
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


	public User getProjectCreator() {
		return projectCreator;
	}


	public void setProjectCreator(User projectCreator) {
		this.projectCreator = projectCreator;
	}


	public List<User> getMembers() {
		return members;
	}


	public void setMembers(List<User> members) {
		this.members = members;
	}


	public List<Task> getProjectTasks() {
		return projectTasks;
	}


	public void setProjectTasks(List<Task> projectTasks) {
		this.projectTasks = projectTasks;
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