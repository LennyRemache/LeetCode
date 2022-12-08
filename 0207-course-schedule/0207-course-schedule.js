/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const buildAdjList = (edges) => {
    // T: O(n+e)
    let adjList = {};
    
    for(let edge of edges) {
        const [course, preReq] = edge; // destructuring how each prequisite is of the form [[course, preReq], [course, prereq], ...]
        if (adjList[course] === undefined) adjList[course] = [preReq];
        else adjList[course].push(preReq);
    }
    
    return adjList;
    
    /*
        ex: {
                o: [],
                1: [0],
                2: [1,3],     Course 2 requires you to take course 1 and 3 as prerequisites
                3: []
            }
    
    */
}

const canFinish = (numCourses, prerequisites) => {
    // T: O(n+e) => number of courses/vertices + edges
    // S: O(n+e) => adjList worse case has (all courses-1) available with preReqs + edges in adjList
    let adjList = buildAdjList(prerequisites); // S: O(n+e)
    
    // used to track which courses are currently in the current path of the recursive iteration
    let visited = {}; // S: O(n)
    
    const hasCycleDFS = (course) => {
        // if curr course is already in the graph  path of the current recursive iteration then we have a cycle, so return true
        if (visited[course]) {
            return true;
        }
        // else curr course is not in the current graph path, safe to continue

        // if curr course has prerequisites
        if (adjList[course] !== undefined && adjList[course].length > 0) {
            // set current course as visited/being in the current graph path
            visited[course] = true;
            
            // this is where the recursive DFS happens
            // check if each of the current course prerequisites has a cycle or not
            for(let preReq of adjList[course]) {
                // if a prereq of course has a cycle then return true
                if(hasCycleDFS(preReq)) {
                    return true;
                }
                // else continue checking the rest of the prereqs for the current course
            }
            
            // when loop ends then we can safely say that current course graph path is not being visited anymore
            // so set to false and remove the prereqs for this course in the adjList
            visited[course] = false;
            adjList[course] = [];
        }
        
        // else a cycle is not possible for the current course with no prerequisites, so return false
        return false; 
    }
    
    // check if any of the courses in adjList have a cycle
    for(let course in adjList) {
        // if any have a cycle we can end loop by returning false (saying that it is not possible to finish all courses)
        if(hasCycleDFS(course)) {
            return false;
        }
    }
    
    return true;
    
};