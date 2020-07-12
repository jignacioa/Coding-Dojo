<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>     
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Idea: <c:out value ="${idea.idea}"/></h1>
		<p>Created By: <c:out value="${idea.user.name}"/></p>
	<form action="/ideas/${idea.id}/edit">
    <input type="submit" value="Edit">
	</form>
	<form action="/ideas/${idea.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form>
	<a href="/ideas">Back to Ideas List</a>
</body>
</html>