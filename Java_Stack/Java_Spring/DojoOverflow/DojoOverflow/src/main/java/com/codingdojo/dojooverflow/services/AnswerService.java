package com.codingdojo.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Answer;
import com.codingdojo.dojooverflow.repositories.AnswerRepository;
import com.codingdojo.dojooverflow.repositories.QuestionRepository;
import com.codingdojo.dojooverflow.repositories.TagRepository;

@Service
public class AnswerService {
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;
	@Autowired
	TagRepository tagRepository;
	
	public List<Answer> allAnswers(){
		return (List<Answer>) answerRepository.findAll();
	}
	public Answer createAnswer(Answer a) { 
	    return answerRepository.save(a);
	}
	public Answer findAnswer(Long id) {
	    Optional<Answer> answer = answerRepository.findById(id);
	    if(answer.isPresent()) {
	        return answer.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteAnswer(Long id) {
		answerRepository.deleteById(id);	
	}
	public Answer updateAnswer(Answer answer) {
		return answerRepository.save(answer);
	}
	
}
