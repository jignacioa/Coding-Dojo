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
	<form:form action="/licenses" method="post" modelAttribute="license">
    <p>
        <form:label path="person.id">Person:</form:label>
        <form:errors path="person.id"/>
        <form:select path="person.id">
        <c:forEach items="${persons}" var="person">
        	<form:option value="${person.id}"><c:out value= "${person.firstName} ${person.lastName}"/></form:option>
        	 </c:forEach>
        </form:select>
       
    </p>
    
    <p>
        <form:label path="state">State:</form:label>
        <form:errors path="state"/>
        <form:input path="state"/>
    </p>
    <p>
        <form:label path="expirationDate">Expiration Date:</form:label>
        <form:errors path="expirationDate"/>
        <form:input type="date" path="expirationDate"/>
    </p>
    <input type="submit" value="Create"/>
</form:form> 
<a href="/persons/new">Back to Main</a>
</body>
</html>