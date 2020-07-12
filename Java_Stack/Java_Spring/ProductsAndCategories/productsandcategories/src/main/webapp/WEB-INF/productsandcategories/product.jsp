<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Product Page</title>
</head>
<body>
	<h1><c:out value="${product.name}"/></h1>
    <p>
   		<h3>Add Category</h3>
   		<form action="/products/${product.id}/add" method="post"> 
	    	<select name="categories">
		   		<c:forEach items="${allCategories}" var="c">
		       		<option value="${c.id}"><c:out value="${c.name}"/></option>
		   		</c:forEach>
			</select>
			<input type="submit" value="Add"/>
		</form>
	<p> 
		<h2>Categories:</h2>
				<c:forEach items="${categories}" var="category">
						<c:out value="${category.name}"/> 
				</c:forEach>	
</body>
</html>