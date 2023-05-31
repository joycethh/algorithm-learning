//this is a graph class impletement by adjacency list.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
  }
  removeVetex(vertex) {
    const adjacentVertices = this.adjacencyList[vertex]; // find out the other vetex which have relation with //// Shanghai: (2) ['Kansas City', 'Detroit']
    for (let i = 0; i < adjacentVertices.length; i++) {
      const adjacentVertex = adjacentVertices[i];
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }
  depthFirstRecursive(start) {
    //"start" represents the staring vertax for the depth-first search
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const traverse = (vertex) => {
      //"vertex" representsthe current vertex being visited
      if (!vertex) return null;

      if (!visited.hasOwnProperty(vertex)) {
        result.push(vertex);
        visited[vertex] = true;

        adjacencyList[vertex].forEach((neighborVetex) => {
          if (!visited[neighborVetex]) traverse(neighborVetex);
        });
      }
    };

    traverse(start);
    console.log("dfsRecursive", result);
    return result;
  }
}

const g = new Graph();
g.addVertex("Shanghai");
g.addVertex("Kansas City");
g.addVertex("Detroit");
g.addVertex("Jefferson City");
g.addEdge("Shanghai", "Kansas City");
g.addEdge("Shanghai", "Detroit");
g.addEdge("Detroit", "Kansas City");
g.addEdge("Kansas City", "Jefferson City");

console.log(g.adjacencyList);
//{Shanghai: Array(2), Kansas City: Array(3), Detroit: Array(2), Jefferson City: Array(1)}
// Detroit: (2) ['Shanghai', 'Kansas City']
// Jefferson City: ['Kansas City']
// Kansas City: (3) ['Shanghai', 'Detroit', 'Jefferson City']
// Shanghai: (2) ['Kansas City', 'Detroit']

g.removeVetex("Shanghai");
console.log("delete vetex", g.adjacencyList);
