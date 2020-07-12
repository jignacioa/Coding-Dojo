<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1> <c:out value="${project.project}"/></h1>
	<a href="/projects">Projects</a>
	<h3><c:out value="${project.description}"/></h3>
	<p>Manager: <c:out value="${project.projectCreator.firstname} ${project.projectCreator.lastname} "/></p>
	<p>Team Members:</p>
	<c:forEach items="${teamMembers}" var="teamMember">
        	<p><c:out value= "${teamMember.firstname} ${teamMember.lastname}"/></p>
    </c:forEach>
	<h3>Project Tasks</h3>
<table>
    <thead>
        <tr>
            <th>Project</th>
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
				<td><a href="/projects/${project.id}/tasks/${projectTask.id}/edit">Edit Task</a></td
	        </tr>
	    </c:forEach>
    </tbody>
	</table>
	<form action="/projects/${project.id}/tasks/add" method="post">
	    <input type="hidden">
	    <input type="submit" value="Create Task">
	</form>
</body>
</html>