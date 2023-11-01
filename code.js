function hasCycle(graph) {
    //Initialize Storage
    var visited = new Array(graph.length).fill(false);

    //Start from every node that has not been already visited
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            if (checkFromNode(i, [])) { return true; };
        }
    }
    //Recursively run through the graph starting at one node
    function checkFromNode(node, checked) {
        if (checked.includes(node)) { return true; }
        visited[node] = true;
        checked.push(node);
        for (let j = 0; j < graph[node].length; j++) {
            if (checkFromNode(graph[node][j], [...checked])) { return true; }
        }
        return false;
    }
    return false;
}
