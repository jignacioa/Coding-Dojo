<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Category Page</title>
</head>
<body>
	<h1><c:out value="${category.name}"/></h1>
    <p>
   		<h3>Add Product</h3>
   		<form action="/categories/${category.id}/add" method="post"> 
	    	<select name="products">
		   		<c:forEach items="${allProducts}" var="p">
		       		<option value="${p.id}"><c:out value="${p.name}"/></option>
		   		</c:forEach>
			</select>
			<input type="submit" value="Add"/>
		</form>
	<p> 
		<h2>Products:</h2>
				<c:forEach items="${products}" var="product">
						<c:out value="${product.name}"/> 
				</c:forEach>		
</body>
</html>