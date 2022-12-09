
class MinStack {
    constructor() {
        this.minimum = [];
        this.stack = [];
    }
    
    push(val) {
        if (this.stack.length === 0) {
            this.minimum.push(val);
        } else {
            // keeps track of the respective minimum at each state of the stack
            this.minimum.push(Math.min(this.minimum[this.minimum.length-1], val));
        }
        this.stack.push(val);
    }
    
    pop() {
        this.stack.pop();
        this.minimum.pop();
    }
    
    top() {
        return this.stack[this.stack.length-1];
    }
    
    getMin() {
        return this.minimum[this.minimum.length-1];
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */