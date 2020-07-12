
public class Human extends Mammal{ //subclass of Mammal 
//will have access to private mbr vars only if they were exposed through getters/settters
	public void goToWork(){
        System.out.println("I'm going to work, something only humans can do.");
    }
	public void startSleeping() {
		System.out.println("Toss and turn"); // overriding: can changge/extend the method of a superclass by writing method that has same thod sig and return type as parent
		super.startSleeping(); //extend parent class, super invokes superclass method
	}
}
