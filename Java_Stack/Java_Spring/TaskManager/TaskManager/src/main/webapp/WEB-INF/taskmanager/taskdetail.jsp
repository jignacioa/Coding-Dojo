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
	<h1>Task:<c:out value ="${task.task}"/></h1>
	<p>Creator: <c:out value="${task.user.name}"/></p>
	<p>Assignee: <c:out value="${task.assignee}"/></p>
	<p>Priority: <c:out value="${task.priority}"/></p><br>
	<form action="/tasks/${task.id}/edit">
    <input type="submit" value="Edit">
	</form>
	<form action="/tasks/${task.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form>
</body>
</html>