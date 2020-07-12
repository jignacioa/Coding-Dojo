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
	<h1>Idea to Edit: <c:out value="${idea.idea}"/></h1>
	<p><c:out value="${error}" /></p>
	<form:form action="/ideas/${idea.id}" method="post" modelAttribute="idea">
    <input type="hidden" name="_method" value="put">
    <p>
        <form:label path="idea">Idea:</form:label>
        <form:errors path="idea"/>
        <form:input path="idea"/>
    </p> 
    <input type="submit" value="Update"/>
</form:form>
<form action="/ideas/${idea.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form>
<a href="/ideas">Back to Ideas List</a>

</body>
</html>