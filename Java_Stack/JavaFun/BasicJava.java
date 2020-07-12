import java.time.chrono.MinguoDate;
import java.util.ArrayList;
public class BasicJava {
    public void printNumbers() {
        int i = 1;
        while(i <= 255) {
            System.out.println(i);
            i++;
            
        }
    }
    public void printOdd() {
        int i = 1;
        while(i <= 255) {
            if(i % 2 != 0) {
            System.out.println(i);
            }
            i++;
        }
    }
    public void printSum() {
        int i = 0;
        int sum = 0;
        while(i <= 255) {
            sum+=i;
            System.out.print("New number: " + i + " Sum: " + sum + "\n");
            i++;
        }
    }
    public void iterateArray(int[] array) {
        for(int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
    public void findMax(int[] array) {
        int max = array[0];
        for(int i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        System.out.print(max); 
    }
    public void getAverage(int[] array) {
        int sum = 0;
        for(int i=0; i < array.length; i++) {
            sum += array[i];
        }
        System.out.println(sum/array.length);
    }
    public void createOddArray(ArrayList<Integer> y) {
        int i = 1;
        while(i <= 255) {
            if(i % 2 != 0) {
                y.add(i);
            }
            i++;
        }
        System.out.println(y);
    }
    public void greaterThanY(int[] arr, int y) {
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] > y) {
                System.out.println(arr[i]);
            }
        }
    }
    public void squareValues(int[] squaredArray) {
        for(int i = 0; i < squaredArray.length; i++) {
            squaredArray[i] =  (int) Math.pow(squaredArray[i], 2);
        }
        System.out.println(java.util.Arrays.toString(squaredArray));
    }
    public void noNegatives(ArrayList<Integer> noNegArray) {
        for(int i = 0; i < noNegArray.size(); i++) {
            if(noNegArray.get(i) < 0) {
             noNegArray.set(i, 0);
            }
            
        }
        System.out.println(noNegArray);
    }
    public void findThreeValues(int[] array) {
        ArrayList<Integer> threeValues = new ArrayList<Integer>();
        int max = array[0];
        int min = array[0];
        int sum = 0;
        for(int i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
            if(array[i] < min) {
                min = array[i];
            }
            sum += array[i];
        }
        int avg = sum/array.length;
        threeValues.add(max);
        threeValues.add(min);
        threeValues.add(avg);
        System.out.println(threeValues);
    }
    public void shiftValues(ArrayList<Integer> shiftingArray) {
        shiftingArray.remove(shiftingArray.get(0));
        shiftingArray.add(0);
        System.out.println(shiftingArray);
    }
}