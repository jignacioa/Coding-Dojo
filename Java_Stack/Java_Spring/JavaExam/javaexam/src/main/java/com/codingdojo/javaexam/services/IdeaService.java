package com.codingdojo.javaexam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.javaexam.models.Idea;
import com.codingdojo.javaexam.repositories.IdeaRepository;

@Service
public class IdeaService {
	private final IdeaRepository ideaRepository;

	public IdeaService(IdeaRepository ideaRepository) {
		this.ideaRepository = ideaRepository;
	}
	
	public List<Idea> allIdeas() {
		 return ideaRepository.findAll();
	}
	
	public Idea createIdea(Idea idea) {
        return ideaRepository.save(idea);
	}
	
	public Idea findIdea(Long id) {
		Optional <Idea> idea = ideaRepository.findById(id);
		if(idea.isPresent()) {
            return idea.get();
        } else {
            return null;
        }
	}
	
	public Idea updateIdea(Long id, String idea) {
    	Optional<Idea> toUpdate = ideaRepository.findById(id);
    	if(toUpdate != null) {
    		toUpdate.get().setIdea(idea);
    		Idea i = toUpdate.get();
    		ideaRepository.save(i);
    		return toUpdate.get();
    	}
    	return null;
    }
	public void deleteIdea(Long id) {
		ideaRepository.deleteById(id);
	}
	
}
