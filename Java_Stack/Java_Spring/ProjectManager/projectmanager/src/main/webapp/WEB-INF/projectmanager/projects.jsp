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
	<h1>Projects Listing <c:out value="${user.firstname}"/></h1>
	<table>
    <thead>
        <tr>
            <th>Project</th>
            <th>Manager</th>
            <th>Priority</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${projects}" var="project"> 
	        <tr>
	        	<td><a href="projects/${project.id}"><c:out value="${project.project}"/></a></td>
	            <td><c:out value="${project.projectCreator.firstname}"/></td>
	             <td><form action="/projects/${project.id}/delete" method="post">
				    <input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
					</form></td>
	        </tr>
	    </c:forEach>
    </tbody>
	</table>
	<form action="/projects/new" method="post">
    <input type="hidden">
    <input type="submit" value="Create Idea">
</form>
	

</body>
</html>