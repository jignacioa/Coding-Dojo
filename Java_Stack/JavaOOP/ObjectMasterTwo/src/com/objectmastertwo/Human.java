package com.objectmastertwo;
public class Human {
	private int strength = 3;
	protected int stealth = 3;
	private int intelligence = 3;
	protected int health = 100;
	
	public int attack(Human attacked) {
		int attackedHealth = attacked.health - this.health; 
		System.out.println(attackedHealth);
		return attackedHealth;
	}
	
}