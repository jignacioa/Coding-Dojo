package com.codingdojo.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Question;
import com.codingdojo.dojooverflow.repositories.AnswerRepository;
import com.codingdojo.dojooverflow.repositories.QuestionRepository;
import com.codingdojo.dojooverflow.repositories.TagRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;
	@Autowired
	TagRepository tagRepository;
	
	public List<Question> allQuestions(){
		return (List<Question>) questionRepository.findAll();
	}
	public Question createQuestion(Question q) { 
	    return questionRepository.save(q);
	}
	public Question getQuestionById(Long id) {
		return questionRepository.getQuestionById(id);
	}
	public Question findQuestion(Long id) {
	    Optional<Question> question = questionRepository.findById(id);
	    if(question.isPresent()) {
	        return question.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteQuestion(Long id) {
		questionRepository.deleteById(id);	
	}
	public Question updateQuestion(Question question) {
		return questionRepository.save(question);
	}
	
}

