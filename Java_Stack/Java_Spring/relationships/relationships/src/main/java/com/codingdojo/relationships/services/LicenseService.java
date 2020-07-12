package com.codingdojo.relationships.services;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

import com.codingdojo.relationships.models.License;
import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepository;
	
	public LicenseService(LicenseRepository licenseRepository) {
		this.licenseRepository = licenseRepository;
		
	}
	public License createLicense(License license) {
        return licenseRepository.save(license);
	}
	public String createLicenseNumber() {
		String licenseNumber = String.valueOf(ThreadLocalRandom.current().nextInt(000001, 100000 + 1));
		return licenseNumber;
	}
	public License findLicense(Long id) {
		Optional <License> license = licenseRepository.findById(id);
		if(license.isPresent()) {
            return license.get();
        } else {
            return null;
        }
	}
}
