<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="/css/projectinfo.css">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
	<h1 id="header">ProManager</h1>
		<div id="projectsHeader">
			<h1><c:out value="${project.project}"/></h1>
			<h3 id="description"><c:out value="${project.description}"/></h3>
			<div>
				<a id="projectsLink" href="/projects">Projects</a>
				<a id="logout" href="/logout">Log Out</a>
			</div>
		</div>
		<div class="member-section">
			<div>
		   		<h3>Add Team Members</h3>
		   		<form action="/projects/${project.id}/add" method="post"> 
			    	<select name="members">
					    <option>-Select team members-</option>
				   		<c:forEach items="${members}" var="member">
				       		<option value="${member.id}"><c:out value="${member.firstname} ${member.lastname}"/></option>
				   		</c:forEach>
					</select>
					<input type="submit" value="Add Member"/>
				</form>
			</div>
			<div>
			<h3>Team Members</h3>
			<c:forEach items="${teamMembers}" var="member">
				<p><c:out value="${member.firstname} ${member.lastname}"/></p>
			</c:forEach>
			</div>
			<div>
				<form action="/projects/${project.id}/tasks/add" method="post">
				    <input type="hidden">
				    <input type="submit" value="Create Task">
				</form>	
				<form action="/projects/${project.id}/delete" method="post">
					    <input type="hidden" name="_method" value="delete">
					    <input type="submit" value="Cancel">
				</form>
			</div>
		</div>
	</div>
</body>
</html>