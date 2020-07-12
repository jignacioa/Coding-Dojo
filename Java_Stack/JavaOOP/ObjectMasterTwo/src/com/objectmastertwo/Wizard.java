package com.objectmastertwo;
	
public class Wizard extends Human {
	int health = 50;
	int intelligence = 8;
	public int heal(Human human) {
		int healedHealth = human.health + this.intelligence;
		System.out.println(healedHealth);
		return healedHealth;
	}
	public int fireball(Human human) {
		int damagedHealth = human.health - this.intelligence;
		System.out.println(damagedHealth);
		return damagedHealth;
	}

}
