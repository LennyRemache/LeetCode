/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const buildAdjList = (edges) => {
    let adjList = {};
    
    for(let edge of edges) {
        const [course, preReq] = edge;
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
    let adjList = buildAdjList(prerequisites);
    
    let visited = {};
    
    const hasCycleDFS = (course) => {
        // if curr course was already taken
        if (visited[course]) {
            return true;
        }
        
        // if curr course has prerequisites
        if (adjList[course] !== undefined && adjList[course].length > 0) {
            visited[course] = true;
            
            for(let preReq of adjList[course]) {
                if(hasCycleDFS(preReq)) {
                    return true;
                }
            }
            
            visited[course] = false;
            
            adjList[course] = [];
        }
        
        return false; 
    }
    
    for(let course in adjList) {
        if(hasCycleDFS(course)) {
            return false;
        }
    }
    
    return true;
    
};