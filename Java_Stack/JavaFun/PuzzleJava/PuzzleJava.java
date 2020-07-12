import java.util.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Collections;
import java.lang.StringBuilder;

public class PuzzleJava {
    public ArrayList greaterThan(int[] array) { 
        ArrayList<Integer> greaterThanTen = new ArrayList<Integer>();
        for(int i = 0; i < array.length; i++) {
            if(array[i] > 10) {
                greaterThanTen.add(array[i]);
            }
        }
        
        return greaterThanTen;
    }
    public ArrayList shuffleNames(ArrayList<String> array) {
        Collections.shuffle(array);
        System.out.println(array);
        ArrayList<String> namesArray = new ArrayList<String>();
        for(int i = 0; i < array.size(); i++) {
            if(array.get(i).length() > 5) {
                namesArray.add(array.get(i));
            }
        }
        return namesArray;
    }
    public void alphabetArray(char[] array) {
       ArrayList<Character> list = new ArrayList<Character>();
       for(char letter: array) {
           list.add(letter);
       }
       Collections.shuffle(list);
       System.out.println("last letter is " + list.get(25));
       System.out.println("first letter is " + list.get(0));
       if((list.get(0) == 'a') || (list.get(0) == 'e') || (list.get(0) == 'i') || (list.get(0) == 'o') || (list.get(0) == 'u')) {
           System.out.println("first letter is " + list.get(0) + ", is a vowel");
       }
    }
    public ArrayList randomNumbers(int max, int min) {
        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++) {
            Random randomNumber = new Random();
            numberArray.add(randomNumber.nextInt((max-min) +1)+min);
        }    
        return numberArray; 
    }
    public ArrayList randomNumbersSorted(int max, int min) {
        ArrayList<Integer> numberArray = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++) {
            Random randomNumber = new Random();
            numberArray.add(randomNumber.nextInt((max-min) +1)+min);
        }    
        Collections.sort(numberArray); 
        System.out.println(numberArray);
        System.out.println("Min. value is " + numberArray.get(0) + ", Max value is " + numberArray.get(9));
        return numberArray;
    } 
    public void randomString() {
        Random randomNumber = new Random();
        StringBuilder newString = new StringBuilder();
        String letters = "abcdefghijklmnopqrstuvwxyz";
        for (int i = 0; i < 5; i++) {
            newString.append(letters.charAt(randomNumber.nextInt(letters.length())));
        }
        String randString = newString.toString();
        System.out.println(randString);
    }
    public void randomStringArray() {
        ArrayList<String> newArr = new ArrayList<String>();
        Random rand = new Random();
        StringBuilder randString = new StringBuilder();
        String alpha = "abcdefghijklmnopqrstuvwxyz";
         for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 5; j++) {
                randString.append(alpha.charAt(rand.nextInt(alpha.length())));
            }
            String finalString = randString.toString();
            newArr.add(finalString);
            randString.setLength(0);
        }
        System.out.println(newArr);
        }
    }   