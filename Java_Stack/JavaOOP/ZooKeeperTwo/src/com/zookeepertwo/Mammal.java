package com.zookeepertwo;
	public class Mammal {
		private int totalEnergy = 300;
		public void energyLevel(int energyChange) {
			int startingEnergy = totalEnergy;
			int afterActionEnergy = startingEnergy + energyChange;
			this.totalEnergy = afterActionEnergy;
			//System.out.println(totalEnergy);
		}
		public int displayEnergy() {
			System.out.println(totalEnergy);
			return totalEnergy;
		}
		
	}