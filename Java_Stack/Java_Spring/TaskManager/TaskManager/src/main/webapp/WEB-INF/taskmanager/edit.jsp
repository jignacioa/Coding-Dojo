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
	<h1>Task Editing Form</h1>
	<form:form action="/tasks/${task.id}" method="post" modelAttribute="task">
    <input type="hidden" name="_method" value="put">
    <p>
        <form:label path="task">Task:</form:label>
        <form:errors path="task"/>
        <form:input path="task"/>
    </p>
    <p>
        <form:label path="assignee">Assignee:</form:label>
        <form:errors path="assignee"/>
         <form:select path="assignee">
        <c:forEach items="${users}" var="user">
        	<form:option value="${user.name}"><c:out value= "${user.name}"/></form:option>
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
</form:form>

</body>
</html>