package com.codingdojo.javaexam.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	    @NotBlank(message="Full name is required.")
	    private String name;
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
	    @OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	    private List<Idea> ideas;
		
	    
	    public User() {
			
		}
	    
	
		public User(Long id, @NotBlank(message = "Full name is required.") String name,
				@NotBlank(message = "Email is required.") @Email(message = "Email must be valid") String email,
				@Size(min = 5, message = "Password must be greater than 5 characters") String password,
				String passwordConfirmation) {
			this.id = id;
			this.name = name;
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


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
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


		public List<Idea> getIdeas() {
			return ideas;
		}


		public void setIdeas(List<Idea> ideas) {
			this.ideas = ideas;
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
	
	
	

