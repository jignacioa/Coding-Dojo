/*  
ARRAY
In Java - array size is fixed after initailization - no adding/removing items
int[] myArray; DECLARATION
myArray = new int[5]; INITIALIZATION
myArray[0] = 4; //ADDING
myArray[1] = 8;
myArray[2] = 8;
myArray[3] = 5;
myArray[4] = 9;

All at once: int[] myArray = {4, 8, 8, 5, 9};  length determined by # of elements, can't add/remove elements
-------------------------------------------------

ARRAY LIST - array not fixed in size - can add items as we need to 
*/

import java.util.ArrayList;
ArrayList<Integer> myArray = new ArrayList<Integer>();

//<Integer> = generic: tells ArrayList acceptable types it can hold *not including it allows to add anything BUT ALWAYS USE IT!

//ADDING & GETTING
myArray.add(10);
int num = myArray.get(0);

//Adding different types - use generic as an object and add different object types! objects are inhereted from the Object class
import java.util.ArrayList;
ArrayList<Object> list = new ArrayList<Object>();
list.add(10);
list.add("Hello");
list.add(new ArrayList<Integer>());
list.add(new Double(12.0)); // adding a Double of value 12.0
        
System.out.println(list); // [10, "Hello", [], 12.0]