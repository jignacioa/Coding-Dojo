public class ProjectTest {
    public static void main(String[] args) {
        Project Project1 = new Project();
        Project1.setName("Project 1");
        Project1.setDescription("Here is Project 1");
        System.out.println(Project1.elevatorPitch(Project1));
        Project Project2 = new Project("project name");
        Project2.setName("Project 2");
        Project2.setDescription("Here is Project 2");
        System.out.println(Project2.elevatorPitch(Project2));
        Project Project3 = new Project("project name", "project description");
        Project3.setName("Project 3");`
        Project3.setDescription("Here is Project 3");
        System.out.println(Project3.elevatorPitch(Project3));
    }
}