import java.util.ArrayList;
import java.lang.ClassCastException;
//import java.util.Exceptions;
public class Exceptions {
    public void getExceptions() {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");
        for(int i = 0; i < myList.size(); i++) {
        try {
        Integer castedValue = (Integer) myList.get(i);
        System.out.println(castedValue);
        } catch(ClassCastException e) {
            System.out.println(myList.get(i) + " at index of " + myList.indexOf(myList.get(i)) + " can not be casted to Integer");
        }
        }
    }
}