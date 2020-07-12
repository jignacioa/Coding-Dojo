package com.objectmastertwo;

public class Ninja extends Human {
	private int stealth = 10;
	
	public int stealHuman(Human human) {
		int totalStealth = human.stealth + this.stealth;
		human.stealth = 0;
		System.out.println(human.stealth);
		this.stealth = totalStealth;
		System.out.println(stealth);
		return stealth;
	}
	public int runAway() {
		int ninjaHealth = health;
		int afterRunHealth = ninjaHealth - 10;
		System.out.println(afterRunHealth);
		return afterRunHealth;
	}
}
