import java.util.HashMap;
import java.util.Set;
public class HashMapFun {
    public void getOneSong() {
        HashMap<String, String> tracksMap = new HashMap<String, String>();
        tracksMap.put("Love Me", "love me love me");
        tracksMap.put("Care", "care care care");
        tracksMap.put("Lamps", "lamps lamps lams");
        tracksMap.put("Hey", "hey hey hey");
        String track = tracksMap.get("Love Me");
        System.out.println(track);
    }
    public void getAllSongs() {
        HashMap<String, String> tracksMap = new HashMap<String, String>();
        tracksMap.put("Love Me", "love me love me");
        tracksMap.put("Care", "care care care");
        tracksMap.put("Lamps", "lamps lamps lams");
        tracksMap.put("Hey", "hey hey hey");
        
        Set<String> trackName = tracksMap.keySet();
        for(String track: trackName) {
            System.out.println(track + " : " + tracksMap.get(track));
        }

    }
}