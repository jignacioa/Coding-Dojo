<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>     
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/projectinfo.css">
<meta charset="ISO-8859-1">
<title>New Project Page</title>
</head>
<body>
	<div class="container">
		<h1 id="header">ProManager</h1>
		<div id="projectsHeader">
			<h1>Create Project</h1>
			<div>
				<a id="projectsLink" href="/projects">Projects</a>
				<a id="logout" href="/logout">Log Out</a>
			</div>
		</div>
	<form:form class="edit-create-form" action="/projects" method="post" modelAttribute="project">
	<h3>Project Details</h3>
	<p id="titleInput">
        <form:label path="project">Project Title:</form:label>
        <form:errors path="project"/>
        <form:input path="project"/>
    </p>
    <p id="textarea">
        <form:label path="description">Description:</form:label>
        <form:errors path="description"/>
        <form:textarea path="description"/>
    </p>
    <input id="inputSubmit" type="submit" value="Submit"/>
    <p><a id="cancelLink" href="/projects/${project.id}">Cancel</a>
</form:form>
</div>
</body>
</html>
