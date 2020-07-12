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
	<h1>Create a new idea</h1>
	<form:form action="/ideas" method="post" modelAttribute="idea">
	<p>
        <form:label path="idea">Idea:</form:label>
        <form:errors path="idea"/>
        <form:input path="idea"/>
    </p>
    <input type="submit" value="Create"/>
</form:form>
</body><br>
<a href="/ideas">Back to Ideas List</a>
</html>