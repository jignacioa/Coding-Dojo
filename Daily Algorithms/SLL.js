class SLL {
    constructor() {
        this.head = null;
    }

    //add to the front of the list 
    addToFront(node) {
        if(this.isEmpty()) {
            this.head = node;
            return;
        }
           node.next = this.head;
           this.head = node;
           return;
        }
       
    //check if the head is empty 
    isEmpty() {
        if(this.head) {
        return false;
        }
        return true;
    }

    //add to the end of the list, if empty move the head
    addToBack(node) {
        let runner = this.head;
        while(runner) {
            runner = runner.next;
            if (runner.next === null) {
                runner.next = node;
            }
        }

    }
    //return T or F if node has data === value 
    //does not pass the node on the value to search for
    //contains(value) {}
}

class Node {
    constructor(data) {
        this.data= data;
        this.next=null;
    }
}

var mySLL = new SLL();

var node1= new Node(7)
mySLL.addToFront(node1)

var node2= new Node(8)
mySLL.addToFront(node2)

var node3= new Node(9)
mySLL.addToFront(node3)

var node4 = new Node(10);
mySLL.addToBack(node4);
//var node3 = new Node(9)
//var node3 = new Node(9);



console.log(mySLL)