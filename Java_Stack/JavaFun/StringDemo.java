public class StringDemo {   ///Strings - object that belongs to a class; immutable instances
    public static void main(String[] args) {
        String ninja = "CD is awesome!";
        int length = ninja.length(); // Length method
        String string1 = "My name is ";
        String string2 = "Jesus";
        String ninja2 = String.format("Hi %s, you owe me $%.2f !", "Jack", 25.00); //another concatenate option, %s: expects string, %.2f: expects float, 2 will palce two vals to right of decimal
        String ninja3 = "Welcome to Coding Dojo"; //IndexOf - index where target string 1st found/ -1 if not
        int a = ninja3.indexOf("Coding");  
        int b = ninja3.indexOf("co");
        int c = ninja3.indexOf("pizza");
        String sentence = "  spaces  "; // trim - rids of trailing&leading spaces
        String d = "HELLO";
        String e = "hello";
        String f = new String("word");
        String g = new String("word");

        System.out.println("String length is " + length); //String length is 14
        System.out.println(string1.concat(string2)); // Concatenate - My name is Jesus
        System.out.println(ninja2); //format - Hi Jack, you owe me $25.00
        System.out.println(a); //11
        System.out.println(b); //3
        System.out.println(c);// -1
        System.out.println(sentence.trim());
        System.out.println(d.toLowerCase()); //hello 
        System.out.println(e.toUpperCase()); //HELLO
        System.out.println(f == g); //false - not same exact object
        System.out.println(f.equals(g)); // true - same exact characters 
    }
}