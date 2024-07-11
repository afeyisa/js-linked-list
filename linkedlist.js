class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



// represent the full list.
class LinkedList{

    constructor(){
        this.head = null;
    }

    //adds a new node containing value to the end of the list
    append(value){

        if(!this.head){
            this.head = new Node(value)

        }

        else{

            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }
            pointer.next = new Node(value);
        }
    }

//adds a new node containing value to the start of the list
    prepend(value){

        if(!this.head){
            this.head = new Node(value);
        }
        else{

            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;

        }

    }

    //returns the total number of nodes in the list
    size(){

        let totalNode = 0;
        let pointer = this.head;
        while(pointer){
            totalNode++;
            pointer = pointer.next;
        }

        return totalNode;

    }

    // returns the first node in the list
    getHead(){

        return this.head;

    }

// returns the last node in the list
    tail(){

        let pointer = this.head;
        while(pointer.next){
            pointer = pointer.next;
        }

        return pointer.value;

    }

    // returns the node at the given index
    at(index){

        let i = 0;
        let pointer = this.head;
        let res = null;

        while(pointer){
            if( i === index){
                res = pointer;
                break;
            }
            pointer = pointer.next;
            i++;
        }

        return res;

    }

//returns true if the passed in value is in the list and otherwise returns false.
    contains(value){

        let isContains = false;
        let pointer = this.head;

        while(pointer){
            if(pointer.value === value){
                isContains = true;
                break;
            }
            pointer = pointer.next;

        }

        return isContains;

    }


    // removes last element
    pop(){
        
        let pointer = this.head;

        if(this.head){
            if(this.head.next){
                let frontp = this.head.next
                while(pointer.next){
                    if(frontp.next === null){
                        pointer.next = null;
                        break;
                    }
                    frontp = frontp.next;
                    pointer = pointer.next;
                }

            }

            else{
                this.head = null;
            }
          

        }
     
 
    }

//returns the index of the node containing value, or null if not found.
    find(value){
        let pointer = this.head;
        let i = 0;

        while(pointer){
            if( pointer.value === value){
                return i;
            }
            pointer = pointer.next;
            i++;
    }
    return null

    }


    //changes the list objects  into strings to visualize it
    toString(){
        let pointer = this.head;
        let str  = ''

        while(pointer){
            str = str + pointer.value + " --> "
            pointer = pointer.next
        }
        str = str + 'null'
        return str;

    }

    insertAt(value,index){
 
        if(index === 0){
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        else{

            let i = 1;
            let pointer = this.head;
        
            while(pointer){
               
                if(i === index){
                    let newNode = new Node(value);
                    newNode.next = pointer.next;
                    pointer.next = newNode;
                    break;
    
                }

                pointer = pointer.next;
                i++;
            }
            

        }
       
    }


    removeAt(index){


        if(index === 0){
            this.head = this.head.next;
        }
        else{

            let i = 1;
            let pointer = this.head;
        
            while(pointer){
               
                if(i === index && pointer.next){
                    pointer.next = pointer.next.next;
                    break;
    
                }

                pointer = pointer.next;
                i++;
            }
            

        }

    }

}




let tst = new LinkedList();
