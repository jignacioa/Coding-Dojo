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
		<h1>Edit task for <c:out value="${project.project}"/></h1>
		<a id="logout" href="/logout">Log Out</a>
		</div>
		<form:form class="edit-create-form" action="/projects/${project.id}/tasks/${task.id}/edit" method="post" modelAttribute="task">
		    <input type="hidden" name="_method" value="put">
		    <form:hidden path="project.id" value="${project.id}"/>
		    <h3>Task Editing Form</h3>
		    <p id="textarea">
		        <form:label path="task">Task:</form:label>
		        <form:errors path="task"/>
		        <form:textarea path="task"/>
		    </p>
		    <p>
		        <form:label path="assignee.id">Assignee:</form:label>
		        <form:errors path="assignee.id"/>
		        <form:select path="assignee.id">
		        <c:forEach items="${assignees}" var="assignee">
		        	<form:option value="${assignee.id}"><c:out value= "${assignee.firstname} ${assignee.lastname}"/></form:option>
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
		    <input type="submit" value="Submit"/>
		    <p><a id="cancelLink" href="/projects/${project.id}">Cancel</a>
		</form:form>
	</div>
</body>
</html>