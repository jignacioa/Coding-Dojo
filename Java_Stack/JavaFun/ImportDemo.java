import java.util.Date; //java.util a combo of class interface available for use, here we import Date class
public class ImportDemo {
    public String getCurrentDate() {
        Date date = new Date(); // initialize new date 
        return "Current date is: " + date;
    }
}

//create a test file - runs java classes
//importDemo should only contain info that belongs to class itself 
//separate class info from testing/running 