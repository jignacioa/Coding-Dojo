<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>     
<%@ page isErrorPage="true" %>  
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
			<h1>Add Tasks to: <c:out value="${project.project}"/></h1>
			<h3 id="description"><c:out value="${project.description}"/></h3>
			<div>
				<a id="projectsLink" href="/projects">Projects</a>
				<a id="logout" href="/logout">Log Out</a>
			</div>
		</div>
		<div class="information">
		<form:form class="edit-create-form " action="/projects/tasks/new" method="POST" modelAttribute="task">
			<form:hidden path="project.id" value="${project.id}"/>
			<form:hidden path="taskCreator.id" value="${userId}"/>
			<h3>Task Creator</h3>
			<p id="textarea">
		        <form:label path="task">Task:</form:label>
		        <form:errors path="task"/>
		        <form:textarea path="task"/>
		    </p>
			<p>
		        <form:label path="assignee.id">Assignee:</form:label>
		        <form:errors path="assignee.id"/>
		        <form:select path="assignee.id">
		        	<option>-Select Assignee-<option>
		        <c:forEach items="${assignees}" var="assigne">
		        	<form:option value="${assigne.id}"><c:out value= "${assigne.firstname} ${assigne.lastname}"/></form:option>
		        	 </c:forEach>
		        </form:select>
		    </p>
		    <p>
		        <form:label path="priority">Priority:</form:label>
		        <form:errors path="priority"/>
		        <form:select path="priority">
		        	<form:option value="High">High</form:option>
		        	<form:option value="Medium">Medium</form:option>
		        	<form:option value="Low">Low</form:option>
		        </form:select>
		    </p>
		    <input type="submit" value="Add Task"/>
		</form:form>
		<table>
		    <thead>
		        <tr>
		            <th>Task</th>
		            <th>Assignee</th>
		   			<th>Priority</th>
		        </tr>
		    </thead>
		    <tbody>
		    	<c:forEach items="${projectTasks}" var="projectTask"> 
			        <tr>
			        	<td><c:out value="${projectTask.task}"/></td>
			            <td><c:out value="${projectTask.assignee.firstname} ${projectTask.assignee.lastname}"/></td>
			            <td><c:out value="${projectTask.priority}"/></td>
			        </tr>
			    </c:forEach>
		    </tbody>
		</table>
		<form id="form-done" action="/projects/${project.id}" method="post">
		    <input type="hidden">
		    <input type="submit" value="Done">
		</form>
		</div>
	</div>
</body>
</html>