package com.codingdojo.zookeeperone;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		super.energyLevel(-5);
		System.out.println("Gorilla threw something");
	}
	public void eatBananas() {
		super.energyLevel(10);
		System.out.println("Gorilla is satisfied, it ate a banana");
		
	}
	public void climb() {
		super.energyLevel(-10);
		System.out.println("Gorilla climbed a tree");
		
	}
}
