package com.codingdojo.counter.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;

@Controller
public class CounterController {
	
	@RequestMapping("/")
	public String home(HttpSession session) {
		if(session.getAttribute("count") == null) {
			int count = 0;
			count++;	
			session.setAttribute("count", count);
		} else {
			Integer count = (Integer) session.getAttribute("count");
			count++;	
			session.setAttribute("count", count);
		}
		
		return "index.jsp";
	}
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		session.setAttribute("count", count);
		return "counter.jsp";
	}

}
