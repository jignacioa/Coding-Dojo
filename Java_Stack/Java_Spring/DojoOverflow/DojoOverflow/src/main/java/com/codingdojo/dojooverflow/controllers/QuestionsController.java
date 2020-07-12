package com.codingdojo.dojooverflow.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.dojooverflow.models.Answer;
import com.codingdojo.dojooverflow.models.Question;
import com.codingdojo.dojooverflow.models.Tag;
import com.codingdojo.dojooverflow.services.AnswerService;
import com.codingdojo.dojooverflow.services.QuestionService;
import com.codingdojo.dojooverflow.services.TagService;

@Controller
@RequestMapping("/questions")
public class QuestionsController {
	@Autowired
	QuestionService questionService;
	@Autowired
	AnswerService answerService;
	@Autowired
	TagService tagService;
	
	@GetMapping("")
	public String showDashboard(Model model) {
		model.addAttribute("questions", questionService.allQuestions());
		model.addAttribute("tags", tagService.allTags());
		return "dashboard.jsp";
	}
	@GetMapping("/new")
	public String newQuestion(@ModelAttribute("question") Question question, Model model) {
		return "new.jsp";
	}
	@PostMapping("/newquestion")
	public String create(@Valid @ModelAttribute("question") Question question, BindingResult result, @ModelAttribute("tags") Tag tag) {
	    if (result.hasErrors()){
	        return "new.jsp";
	    } else {
	        questionService.createQuestion(question);
	        return "redirect:/questions/";
	    }
	}
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model, @ModelAttribute("answer") Answer answer) {//using @modelAttribute is good for passing thru an empty variable/object
		model.addAttribute("question", questionService.findQuestion(id));
		model.addAttribute("tags", questionService.findQuestion(id).getTags());
		model.addAttribute("answers", questionService.findQuestion(id).getAnswers());
		return "show.jsp";
	}

	@RequestMapping("/{questionId}")
	public String answer(@PathVariable Long questionId, @Valid @ModelAttribute("answer") Answer answer, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("question", questionService.findQuestion(questionId));
			model.addAttribute("tags", questionService.findQuestion(questionId).getTags());
			model.addAttribute("answers", questionService.findQuestion(questionId).getAnswers());
			return "show.jsp";
		} else {
			answer.setQuestion(questionService.getQuestionById(questionId));
			answerService.createAnswer(answer);
		}
		return "redirect:/questions/"+questionId;
	}
	

}
