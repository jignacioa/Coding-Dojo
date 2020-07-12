package com.objectmastertwo;

public class HumanTest {

	public static void main(String[] args) {
		Wizard newWizard = new Wizard();
		Human human = new Human();
		newWizard.heal(human);
		newWizard.fireball(human);
		Ninja newNinja = new Ninja();
		newNinja.stealHuman(human);
		newNinja.runAway();
		Samurai newSamurai = new Samurai();
		System.out.println(newSamurai.deathBlow(human));
		System.out.println(newSamurai.meditate());

	}

}
