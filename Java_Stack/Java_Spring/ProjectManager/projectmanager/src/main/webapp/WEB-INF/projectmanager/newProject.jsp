<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>     
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Create a Project</h1>
	<form:form action="/projects" method="post" modelAttribute="project">
	<p>
        <form:label path="project">Project Title:</form:label>
        <form:errors path="project"/>
        <form:input path="project"/>
    </p>
    <p>
        <form:label path="description">Description:</form:label>
        <form:errors path="description"/>
        <form:input path="description"/>
    </p>
    <input type="submit" value="Create"/>
</form:form>
</body><br>
<a href="/projects">Back to Projects List</a>
</html>
