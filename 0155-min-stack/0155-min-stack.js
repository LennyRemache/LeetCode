
class MinStack {
    constructor() {
        this.minimum = [Infinity];
        this.stack = [];
    }
    
    push(val) {
        this.stack.push(val);
        this.minimum.push(Math.min(this.minimum[this.minimum.length-1], val));
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