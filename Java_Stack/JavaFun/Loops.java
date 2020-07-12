import java.util.ArrayList;
public class Loops {
    public static void main(String[] args) {
        ArrayList<String> dynamicArray = new ArrayList<String>();
            /*dynamicArray.add("hello");
            dynamicArray.add("world");
            dynamicArray.add("etc");
            for (int i = 0; i < dynamicArray.size(); i++){
                System.out.println(dynamicArray.get(i));
            prints out:
            hello s
            world
            etc
            } */  
            // ENHANCED FOR LOOPS:
            dynamicArray.add("Jesus");
            /*for (int i = 0; i < dynamicArray.size(); i++) {
                String name = dynamicArray.get(i); // assigns array element to a var 
                System.out.println("hello " + name); // hello Jesus 
            }*/
            for (String name : dynamicArray) {  //enhanced  for(element container : collection) {body statements}
                System.out.println("hello " + name);
            }
    }
}