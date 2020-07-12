package com.objectmastertwo;

public class Samurai extends Human {
	private int health = 200;
	private int count = 0;
	public String deathBlow(Human human) {
		int knockOut = human.health;
		knockOut = 0;
		int afterBlowHealth = this.health/2;
		return "Samurai health is " + afterBlowHealth + " after attacking";
	}
	public String meditate() {
		int afterMeditationHealth = this.health + (this.health/2);
		return  "Samurai health is " + afterMeditationHealth + " after meditation";
	}
}
