
class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }
    
    push(elem) {
        this.pushStack.push(elem);
    }
    
    peek() {
        if (this.popStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        
        return this.popStack[this.popStack.length-1];
    }
    
    pop() {
        if (this.popStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        
        return this.popStack.pop();
    }
    
    empty() {
        return this.pushStack.length === 0 && this.popStack.length === 0
    }
}
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */