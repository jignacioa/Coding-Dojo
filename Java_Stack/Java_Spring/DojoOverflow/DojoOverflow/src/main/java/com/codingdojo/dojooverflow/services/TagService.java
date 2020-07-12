package com.codingdojo.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojooverflow.models.Tag;
import com.codingdojo.dojooverflow.repositories.AnswerRepository;
import com.codingdojo.dojooverflow.repositories.QuestionRepository;
import com.codingdojo.dojooverflow.repositories.TagRepository;

@Service
public class TagService {
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;
	@Autowired
	TagRepository tagRepository;
	
	public List<Tag> allTags(){
		return (List<Tag>) tagRepository.findAll();
	}
	public Tag createTag(Tag t) { 
	    return tagRepository.save(t);
	}
	public Tag findTag(Long id) {
	    Optional<Tag> tag = tagRepository.findById(id);
	    if(tag.isPresent()) {
	        return tag.get();
	    } 
	    else {
	        return null;
	    }
	}
	public void deleteTag(Long id) {
		tagRepository.deleteById(id);	
	}
	public Tag updateTag(Tag tag) {
		return tagRepository.save(tag
				);
	}
	
}
