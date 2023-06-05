//first create weighted graph with adjacency list
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, piority) {
    this.values.push({ val, piority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.piority - b.piority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijka(start, end) {
    //start = "A", end = "E"
    const distance = {}; // distance = {A : 0, B: Infinity, C: Infinity....}
    const previous = {}; // previous = {A : null, B: null...}
    const priorityQueue = new PriorityQueue();
    //priorityQueue = PriorityQueue{values: Array(6)} --- [0: {val: 'A',priority: 0}, 1: {val: "B", priority: Infinity}]
    const vertices = Object.keys(this.adjacencyList); // vertices =(6) ["A", "B", 'C'...]

    //initialize distances & previous vertices
    vertices.forEach((vertex) => {
      if (vertex === start) {
        distance[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    });

    while (priorityQueue.values.length) {
      const { val: currentVertex } = priorityQueue.dequeue(); //{val: 'A', piority: 0}  //currentVertex: "A"
      if (currentVertex === end) {
        // Shortest path found, reconstruct and return the path
        const path = [];
        let vertex = end;
        while (vertex) {
          path.unshift(vertex);
          vertex = previous[vertex];
        }
        console.log("path", path);
        return path;
      }

      if (currentVertex || distance[vertex] !== Infinity) {
        for (let neighborVetex of this.adjacencyList[currentVertex]) {
          //currentVertex
          const { node: nextVertex, weight } = neighborVetex; //nextVertex = "B", neighborVetex = {node: "B", weight: 4}

          const currentDistance = distance[currentVertex] + weight;
          //currentDistance = 4
          //distance = {A: 0, B: Inifinity, C:Infinity ....}
          //currentVertex = "A", distance[currentVertex] = 0
          //weight = 4

          if (currentDistance < distance[nextVertex]) {
            distance[nextVertex] = currentDistance;
            previous[nextVertex] = currentVertex;
            priorityQueue.enqueue(nextVertex, currentDistance);
          }
        }
      }
    }
    return null;
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.addEdge("C", "F", 4);

console.log("graph", graph);
