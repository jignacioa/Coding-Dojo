/*class Person {  //#1
    private int age;
    private String name;
    public Person(int ageParam, String nameParam) {
        this.age = ageParam;   // you can refer to (this) for any method of your class
        this.name = nameParam; 
    }
}

class Person { // same as #1
    private int age;
    private String name;
    public Person(int ageParam, String nameParam) {
        age = ageParam;
        name = nameParam; 
    }
}

//MUST USE (this) - para. var shares name with member var. 
class Person { // same as #1
    private int age;
    private String name;
    public Person(int age, String name) {
        this.age = age;
        this.name = name; 
    }
}

//CONSTRUCTOR OVERLOADING, (this) - constructor is overloaded but don't want to write repetitive code 
public class Person {
    private int age;
    private int cmHeight;
    private String name;
    public Person() {     //empty constructor with default values 
        this(20, "John Doe", 171);
    }
    
    public Person(int age, String name, int cmHeight) {  //overloaded constructor 
        this.age = age;
        this.name = name;
        this.cmHeight = cmHeight;
    }
// (this) must be first statement in constructor and it will call the other one for you 
*/

//OBJECT SUPERCLASS
/*(this) refers to your object and objects descend from Object class - can use methods inhereted from Object class
- MUST use (this) to access methods of Object superclass 
.getClass(): returns a Class object that represents the object's current class.
.equals(): compares two objects for equality and returns a boolean.
.toString(): return a string representation of the object. If you want, you can override this method.
 */

class Person {
    private int age;
    private String name;
    public Person(int ageParam, String nameParam) {
        this.age = ageParam;
        this.name = nameParam;
    }
    public void objectMethods(Person anotherObject) {
        System.out.println("Class name: " + this.getClass().getSimpleName());
        System.out.println("toString: " + this.toString());
        System.out.println("Equals: " + this.equals(anotherObject));
    }
}

 


