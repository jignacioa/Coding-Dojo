<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/projects.css">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
	<h1 id="header">ProManager</h1>
	<h1 id="projectsHeader">Projects Listing</h1>
	<a href="/logout">Log Out</a>
	<table>
    <thead>
        <tr>
            <th>Project</th>
            <th>Manager</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${projects}" var="project"> 
	        <tr>
	        	<td><a href="projects/${project.id}"><c:out value="${project.project}"/></a></td>
	            <td><c:out value="${project.projectCreator.firstname} ${project.projectCreator.lastname} "/></td>
	             <td><form action="/projects/${project.id}/delete" method="post">
				    <input type="hidden" name="_method" value="delete">
				    <input type="submit" value="Delete">
					</form></td>
	        </tr>
	    </c:forEach>
    </tbody>
	</table>
	<form class="form" action="/projects/new" method="post">
    <input type="hidden">
    <input type="submit" value="Create Idea">
	</form>
	</div>
</body>
</html>