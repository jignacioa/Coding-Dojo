package com.codingdojo.displaydate.controller;
import java.util.Date;
import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller 
public class DisplayDateController {
	@RequestMapping("/") 
	public String dashboard() {
		return "index.jsp";
	}
	@RequestMapping("/date")
	public String datePage(Model model) {
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("EEEE, 'the' dd 'of' MMMM, YYYY");
		String formattedDate = formatter.format(date);
		model.addAttribute("date", formattedDate);
		return "date.jsp";
	}
	@RequestMapping("/time")
	public String timePage(Model model) {
		Date time = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("hh:mm a");
		String formattedTime = formatter.format(time);
		model.addAttribute("time", formattedTime);
		return "time.jsp";
	}
}
