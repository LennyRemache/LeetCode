/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
    // https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
    let heap = new MinPriorityQueue(); // data structure provided by leetcode

    for(let point of points) {
        heap.enqueue(point, (point[0]**2) + (point[1]**2));
    }

    let res = [];
    while (k > 0) {
        res.push(heap.dequeue().element)
        k--;
    }
    return res;
};