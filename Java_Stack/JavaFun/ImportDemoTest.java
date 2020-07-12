public class ImportDemoTest {
    public static void main(String[] args) {
        ImportDemo iD = new ImportDemo();   //instantiating new ImportDemo object. All its public methods are available to it 
        String currentDate = iD.getCurrentDate(); //calling getCurrentDate() method on the object
        System.out.println(currentDate); //print currentDate string
    }
} 

/*If file and tes file in same directory - no explicit import only compile demo test, 
it'll compile the demo file because it is used here- MUST be in same file*/