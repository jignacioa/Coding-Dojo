
public class Mammal { //superclass
	private boolean sleeping = false;
	public void regulateTemperature() {
		System.out.println("My temp is right");
	}
	public void startSleeping() {
		sleeping = true;
		System.out.println("Zzzz");
	}
	public boolean isSleeping() {
	return sleeping;
	}
}
