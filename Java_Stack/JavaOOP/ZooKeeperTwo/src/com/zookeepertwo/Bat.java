package com.zookeepertwo;

public class Bat extends Mammal {
	public void fly() {
		super.energyLevel(-50);
		System.out.println("Squeak squak flap flap");
	}
	public void eatHumans() {
		super.energyLevel(25);
		System.out.println("Ate a hooman!");
		
	}
	public void attackTown() {
		super.energyLevel(-100);
		System.out.println("*sounds of burning town");
		
	}

}
