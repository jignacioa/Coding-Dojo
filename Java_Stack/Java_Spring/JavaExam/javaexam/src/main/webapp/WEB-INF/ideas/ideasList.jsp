<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Welcome, <c:out value="${user.name}" /></h1>
	<a href="/logout">Logout</a>
	<h3>Ideas:</h3>
	<table>
    <thead>
        <tr>
            <th>Idea</th>
            <th>Creator</th>
        </tr>
    </thead>
    <tbody>
	    <c:forEach items="${ideas}" var="idea"> 
		        <tr>
		             <td><a href="ideas/${idea.id}"><c:out value="${idea.idea}"/></a></td>
		            <td><c:out value="${idea.user.name}"/></
		        </tr>
		 </c:forEach>
    </tbody>
</table>
<form action="/ideas/new" method="post">
    <input type="hidden">
    <input type="submit" value="Create Idea">
</form>

</body>
</html>