public class StringManipulator {
    public String trimAndConcat(String word1, String word2) {
        String trimmedWord1 = word1.trim();
        String trimmedWord2 = word2.trim();
        String stringConcat = trimmedWord1.concat(trimmedWord2);
        return stringConcat;
    }
    public Integer getIndexOrNull(String word, char letter) {
        if(word.indexOf(letter)> 0) {
            return word.indexOf(letter);
        } else {
           return null;
        }
        
    }
    public Integer getIndexOrNull(String word, String subString) {
        if(word.indexOf(subString) > 0) {
            return word.indexOf(subString);
        } else {
        return null;
        }
    }   
    public String concatSubstring(String word1, int number1, int number2, String word2) {
        String sub = word1.substring(number1, number2);
        return sub.concat(word2); 
        
    }
}