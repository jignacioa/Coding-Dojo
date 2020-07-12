class Vehicle {
  /*CONSTRUCTOR AND OVERLOAD*/ 
  // over load allows multiple ways to instantiate our objects - any method can be overloaded not just constructors 
    private int numberOfWheels; // private - prevent access directly tot he field(member variable/attributes)
    private String color;
    public Vehicle() {

    }
    public Vehicle(String color) {
        this.color = color; // set color attribute to value of the color parameter 
    }

    public Vehicle(String color, int num) {
        this.color = color;
        this.numberOfWheels = num;
    }

  
    //MEMBER VARIABLE SECTION
    // getter - retrive field value 
    public int getNumberOfWheels() {
        return numberOfWheels;
    }
    
    // setter - set field value 
    public void setNumberOfWheels(int number) {
        numberOfWheels = number;
    }
    // getter
    public String getColor() {
        return color;
    }
    // setter
    public void setColor(String color) {
        this.color = color;        // (this) keyword necessary to specify we are referring to instance variable and not parameter variable
    }
}
