/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
    
    // combined position, speed, and arrival time and sorted baseed on position
    // [pos, speed, time]
    const cars = position.map((pos, i) => [pos, speed[i], (target - pos) / speed[i]]).sort((a, b) => a[0] - b[0]);
    
    const fleetStack = [];
    
    for(let i = cars.length - 1; i >= 0; i--) {
        fleetStack.push(cars[i]); 
        if (fleetStack.length >= 2) { 
            const currReachTime = fleetStack[fleetStack.length-2][2];
            const prevReachTime = fleetStack[fleetStack.length-1][2];
        
            if (prevReachTime <= currReachTime) {
                fleetStack.pop();
            }
        }
       
    }
    
    return fleetStack.length;
};