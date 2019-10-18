class Stack {
    constructor() {
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.topo());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.topo());