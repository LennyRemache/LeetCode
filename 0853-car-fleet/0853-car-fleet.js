/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// O(nlog(n)) since we sort the cars array and iterate the cars array
// O(n) space since we have a cars array that depends on position/speed length, then we also use a fleet stack that worse case would be size n

const carFleet = (target, position, speed) => {
    
    // combined position, speed, and arrival time and sorted baseed on position
    // makes sense to sort since cars can not overtake each other so even if a car has a higher speed with lower position
    // that car with higher speed will never overtake a car with higher position but lower speed.
    // ex : [1, 11], [5, 2], [11, 1] -> car 1 will not overtake car 2 or 3 or reach the target before car 1 & 2 even if its speed would allow it to
    // [pos, speed, time]
    const cars = position.map((pos, i) => [pos, speed[i], (target - pos) / speed[i]]).sort((a, b) => a[0] - b[0]);
    
    const fleetStack = []; // stack that tracks cars that intersect, based on time of arrival to target, and turn them into a fleet
    
    // iterate in reverse order because we wouldnt know at what speed the next car would be travelling throughout the entire time when iterating in order.
    for(let i = cars.length - 1; i >= 0; i--) {
        fleetStack.push(cars[i]); // push current car into the fleet stack as its own fleet
        if (fleetStack.length >= 2) { // there must be at least 2 fleets in stack in order to be able to make a comparison between 2 different fleets time
            
            const currReachTime = fleetStack[fleetStack.length-1][2]; // arrival time of current fleet that was pushed
            const prevReachTime = fleetStack[fleetStack.length-2][2]; // arrival time of a previous fleet that was at the top of the stack
            
            // this condition checks for intersections with previous fleet. A shorter time would mean that somewhere along the line the car would 
            // have intersected with the prev fleet that has a higher time 
            if (currReachTime <= prevReachTime) { 
                // if curr fleet arrival time is less or equal to prev fleet arrival time then combine into a single fleet
                // by popping out curr fleet since curr would have intersected with prev but not overtaken its position and speed.
                fleetStack.pop();
            }
        }
    }
    
    return fleetStack.length; // the fleets left over is the number of fleets in total
};