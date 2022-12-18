class MyQueue {
    constructor() {
        this.size = 0;
        this.pushStack = [];
        this.popStack = [];
    }    
    
    enqueue(val) {
        this.pushStack.push(val);
        this.size++;
    }
    
    dequeue() {
        if (this.popStack.length === 0) {
            while(this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        
        this.size--;
        return this.popStack.pop();
    }
    
    peek() {
        if (this.popStack.length === 0) {
            while(this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        
        return this.popStack[this.popStack.length - 1];
    }
    
    isEmpty() {
        return !this.pushStack.length && !this.popStack.length;
    }
}

class MyStack {
    constructor() {
        this.queue1 = new MyQueue();
        this.queue2 = new MyQueue();
    }
    
    push(val) {
        if (this.queue1.size > 0) {
            this.queue1.enqueue(val);
        } else {
            this.queue2.enqueue(val);
        }
    }
    
    pop() {
        let res = null;
        if (this.queue1.size === 0) {
            while(this.queue2.size > 1) {
                this.queue1.enqueue(this.queue2.dequeue());
            }
            res = this.queue2.dequeue();
        } else {
             while(this.queue1.size > 1) {
                this.queue2.enqueue(this.queue1.dequeue());
            }
            res = this.queue1.dequeue();
        }
        
        return res;
    }
    
    top() {
        let res = null;
        if (this.queue1.size === 0) {
            while(this.queue2.size > 1) {
                this.queue1.enqueue(this.queue2.dequeue());
            }
            
            res = this.queue2.dequeue();
            this.queue1.enqueue(res)
        } else {
             while(this.queue1.size > 1) {
                this.queue2.enqueue(this.queue1.dequeue());
            }
            res = this.queue1.dequeue();
            this.queue2.enqueue(res)
        }
        
        return res;
    }
    
    empty() {
        return !this.queue1.size && !this.queue2.size;
    }
};
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */