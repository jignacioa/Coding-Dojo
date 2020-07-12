package com.codingdojo.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.languages.models.Language;
import com.codingdojo.languages.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository; //inject repository, languagerepo we're going to use
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
		
	}
	public List<Language> allLanguages() {
		return languageRepository.findAll();
	}
	public Language findLanguage(Long id) {
		Optional <Language> language = languageRepository.findById(id);
		if(language.isPresent()) {
            return language.get();
        } else {
            return null;
        }
	}
	public Language createLanguage(Language l) {
		return languageRepository.save(l);
		
	}
	public void deleteLanguage(Long id) {
		languageRepository.deleteById(id);
	}
	public Language updateLanguage(Long id, String name, String creator, String currentVersion) {
    	Optional<Language> languageUpdate = languageRepository.findById(id);
    	if(languageUpdate != null) {
    		languageUpdate.get().setName(name);
    		languageUpdate.get().setCreator(creator);
    		languageUpdate.get().setCurrentVersion(currentVersion);
    		Language l = languageUpdate.get();
    		languageRepository.save(l);
    		return languageUpdate.get();
    	}
    	return null;
    }

}
