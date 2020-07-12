package com.codingdojo.routing;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	@RequestMapping("/{word}")
	public String dojoLocation(@PathVariable("word") String word) {
		String message = null;
		if(word.equals("dojo")) {
			message = "The " + word + " is awesome!";
		}
		if(word.equals("burbank-dojo")) {
			message = "Burbank Dojo is located in Southern California.";
		}
		if(word.equals("san-jose")) {
			message = "SJ dojo is the headquarters.";
		}
		return message;
	}
}
