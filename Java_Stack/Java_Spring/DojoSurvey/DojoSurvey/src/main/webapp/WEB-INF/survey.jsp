<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Hello from survey</h1>
		<form action="/submission" method="POST">
			<div>
				<label>Your Name:</label>
				<input type="text" name="name"/>
			</div>
			<div>
				<label>Dojo Location:</label>
				<select name="location">
				<option value="San Jose" >-select-</option>
					<option value="San Jose" >San Jose</option>
					<option value="Oakland">Oakland</option>
					<option value="seattle">Seattle</option>
				</select>
			</div>
			<div>
			<label>Favorite Language:</label>
				<select name="language">
				<option value="San Jose" >-select-</option>
					<option value="Python" >Python</option>
					<option value="Java">Java</option>
					<option value="JavaScript">JavaScript</option>
				</select>
			</div>
			<div>
				<label>Comment</label><br>
				<textarea name="comment"></textarea>
			</div>
			<button type="submit">Submit Survey</button>
		</form>
</body>
</html>