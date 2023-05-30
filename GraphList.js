//this is a graph class impletement by adjacency list.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const myGraph = new Graph();
myGraph.addVertex("john");
