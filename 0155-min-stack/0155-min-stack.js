
class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }
    /** 
     * @param {number} val
     * @return {void}
    */
    push(val) {
        this.stack.push(val);
        if(this.min.length === 0) {
            this.min.push(val);
        } else if (val < this.min[this.min.length-1]) {
            this.min.push(val);
        } else {
            this.min.push(this.min[this.min.length-1])
        }
        
    };

    /**
     * @return {void}
     */
    pop(){
        this.stack.pop();
        this.min.pop();
    };

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    };

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    };
}


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */