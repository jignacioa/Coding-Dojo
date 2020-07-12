public class StringManipulatorTest {
    public static void main(String[]  args) {
        StringManipulator manipulator = new StringManipulator();
        String str = manipulator.trimAndConcat("   Hello    ","   World");
        System.out.println(str);

        char letter = 'o';
        Integer a = manipulator.getIndexOrNull("Coding", letter);
        System.out.println(a);
        Integer c = manipulator.getIndexOrNull("Hi", letter);
        System.out.println(c);

        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer d = manipulator.getIndexOrNull(word, subString);
        Integer b = manipulator.getIndexOrNull(word, notSubString);
        System.out.println(d); 
        System.out.println(b);

        String wordSubstring = manipulator.concatSubstring("Hello", 1, 2, "world");
        System.out.println(wordSubstring);
    }
}