<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1><c:out value="${project.project}"/></h1>
	<h3><c:out value="${project.description}"/></h3>
	<p>Manager: <c:out value="${project.projectCreator.firstname} ${project.projectCreator.lastname} "/></p>
	
	 <p>
   		<h3>Add Team Members</h3>
   		<form action="/projects/${project.id}/add" method="post"> 
	    	<select name="members">
			    <option>-Select team members-</option>
		   		<c:forEach items="${members}" var="member">
		       		<option value="${member.id}"><c:out value="${member.firstname} ${member.lastname}"/></option>
		   		</c:forEach>
			</select>
			<input type="submit" value="Add Member"/>
		</form>
		<h3>Team Members</h3>
		<c:forEach items="${teamMembers}" var="member">
						<p><c:out value="${member.firstname} ${member.lastname}"/></p>
				</c:forEach>	
	<p> 
	<form action="/projects/${project.id}/tasks/add" method="post">
	    <input type="hidden">
	    <input type="submit" value="Create Task">
	</form>
</body>
</html>