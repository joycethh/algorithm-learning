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
}

const g = new Graph();
g.addVertex("Shanghai");
g.addVertex("Kansas City");
g.addVertex("Jefferson City");
g.addEdge("Shanghai", "Kansas City");
g.addEdge("Kansas City", "Jefferson City");
