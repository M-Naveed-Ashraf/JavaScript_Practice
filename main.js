// we have read that we can concatinate different strings using a method showing bellow

firstName = "M Naveed";
secondName = "Ashraf";

sentence = "Hello " + firstName + " " + secondName + "! How are you?";

console.log(sentence);


// the new way and essiest way to doing the above work is showing bellow 

sentence = `Hello ${firstName} ${secondName}! How are you?`;

console.log(sentence);

// equality comparisson
// double equal also work but double equal goes true if (2+2="4") where 4 is String . it means double equal don't compare the type of both sides while triple equals does!

if (2 + 2 === 4) {
    console.log("comparisson done ...");
}
else 
 console.log("comparisson not work!");

//  pseudo code for Stack

// Start
// Intialize empty stack with maximum size N
let stack = [];
let max_size = 15;
// set the pointer TOP to -1
let TOP = -1;
let PUSH = function(value){

//     if TOP pointer is less then maximum number N
        if (TOP < max_size){
//          increment in pointer by 1
            TOP +=1;
//          add item at the position of pointer
            stack[TOP] = value;
        }
      else
         {
           console.log('Stack is already full')
         }
}

let POP = function() {
  if (TOP>0){
    let result = stack[TOP];
    delete stack[TOP];
    TOP -=1;
  }
  else{
    console.log('Stack is empty');
  }
}

PUSH(5);
console.log(POP());


// function POP()
//      if pointer TOP is -1 then stack is empty
//          print "Stack is Empty"
//      else
//          POP Out the item at the current position of pointer
//          Decrement in pointer by 1
// End

/*
Begin
 Input stack size
 Initialize top= -1
To add element in stack:
 If stack is not full then
  Increment top variable 
  Insert element into stack 
 Else if stack is full
  Print error message
 End If
To remove element in stack:
 If stack is not empty then 
  Remove element from top of stack
  decrement top variable
 Else if stack is empty
  Print error message
 End If
To check current size of our stack:
 add the value of top variable with 1
 return top variable
End
*/

/*
    Queue Pseudo Code
Start
set the pointer FRONT and REAR at -1
initialize the queue and set it's size
To add data in the Queue
  check if the queue is already full
    print the errormessage
  else if the queue is not full
    for the first element to add in queue
      add 1 in both the REAR POINTER and the FRONT pointer
    for further add elements in the queue add 1 only REAR pointer
    add item at the current position of REAR

To remove data from the queue
  check if the queue empty
    print the error message
  else if the queue is not empty
    remove the item from current position of FRONT pointer
    add 1 in the FRONT pointer till second last value of the queue
    for the last value
      reset the FRONT and REAR pointer to -1

To 
END
*/