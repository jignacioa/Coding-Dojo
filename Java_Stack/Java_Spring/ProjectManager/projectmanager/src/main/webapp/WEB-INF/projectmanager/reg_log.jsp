<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <title>Registration/Login Page</title>
</head>
<body>
    <div class="container">
	<h1>ProManager</h1>
	<p id="errors"><form:errors path="user.*"/></p>
	<div class="regform">
    <form:form method="POST" action="/registration" modelAttribute="user">
    	<h3>Registration</h3>
        <p>
            <form:label path="firstname">First Name</form:label>
            <form:input path="firstname"/>
        </p>
        <p>
            <form:label path="lastname">Last Name</form:label>
            <form:input path="lastname"/>
        </p>
        <p>
            <form:label path="email">Email</form:label>
            <form:input  type="email" path="email"/>
        </p>
        <p>
            <form:label path="password">Password</form:label>
            <form:password path="password"/>
        </p>
        <p>
            <form:label path="passwordConfirmation">Password Confirmation</form:label>
            <form:password path="passwordConfirmation"/>
        </p>
        <input type="submit" value="Register"/>
        <p><a href="/">Member Login</a></p>
    </form:form>
    </div>
    </div>
</body>
</html>