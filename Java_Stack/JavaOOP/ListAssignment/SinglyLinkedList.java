public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() { 
        this.head = null;
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    public void remove() {
        Node current = this.head.next;
        Node prev = this.head;
        while(current != null) {
            if(current.next == null) {
            prev.next = null;
            //current = this.head;
            }
            prev = current;
            current = current.next;
        }
    }
    public void printValues() {
        Node runner = this.head;
        while(runner != null) {
            System.out.println(runner.value);
            runner = runner.next;
        } 
    }
    
}