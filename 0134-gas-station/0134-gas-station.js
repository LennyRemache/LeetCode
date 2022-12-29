/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let loopTank = 0;
    let start = 0;
    let i = 0;
    while (i < gas.length) {
        tank += gas[i];
        tank -= cost[i];
        loopTank += gas[i] - cost[i];
        if (tank < 0) { // not enough gas to get to next station
            tank = 0;
            start = i + 1;
        }
        i++;
    }
    console.log(loopTank)
    return loopTank >= 0 ? start : -1;
};