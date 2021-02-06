<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
			<h1 id="projectName"><c:out value="${project.project}"/></h1>
			<h3 id="description"><c:out value="${project.description}"/></h3>
			<div id="linksDiv">
				<a id="projectsLink" href="/projects">Projects</a>
				<a id="logout" href="/logout">Log Out</a>
			</div>
		</div>
		<div class="information">
			<div id="team">
				<h4>Manager:</h4>
				<p><c:out value="${project.projectCreator.firstname} ${project.projectCreator.lastname} "/></p>
				<h4>Team Members:</h4>
				<c:forEach items="${teamMembers}" var="teamMember">
			        	<p><c:out value= "${teamMember.firstname} ${teamMember.lastname}"/></p>
			    </c:forEach>
		    </div>
			<table>
		    <thead>
		        <tr>
		            <th>Task</th>
		            <th>Assignee</th>
		   			<th>Priority</th>
		   			<th></th>
		        </tr>
		    </thead>
		    <tbody>
		    	<c:forEach items="${projectTasks}" var="projectTask"> 
			        <tr>
			        	<td><c:out value="${projectTask.task}"/></td>
			            <td><c:out value="${projectTask.assignee.firstname} ${projectTask.assignee.lastname}"/></td>
			            <td><c:out value="${projectTask.priority}"/></td>
			            <td><form action="/tasks/${projectTask.id}" method="post">
			            	<input type="hidden" name="project" value="${project.id}">
						    <input type="hidden" name="_method" value="delete">
						    <input type="submit" value="Delete">
							</form></td>
						<td><a id="editLink" href="/projects/${project.id}/tasks/${projectTask.id}/edit">Edit</a></td>
			        </tr>
			    </c:forEach>
		    </tbody>
			</table>
			<form action="/projects/${project.id}/tasks/add" method="post">
		    <input type="hidden">
		    <input id="addTask" type="submit" value="Add Task">
			</form>
		</div>
	</div>
</body>
</html>