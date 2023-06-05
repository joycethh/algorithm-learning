//combine our priority queue /minHeap with dikjkstra
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

class PiorityQueque {
  constructor() {
    this.values = [];
  }

  enqueue(val, piority) {
    let newNode = new Node(val, piority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];

      if (element.piority >= parentElement.piority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;

      idx = parentIdx;
    }
    return this.values.piority;
  }

  dequeue() {
    if (this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.percolateDown();
    }
    return min;
  }
  percolateDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;
      let leftChild, rightChild;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.piority < element.piority) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swapIdx !== null && rightChild.piority < leftChild.piority) ||
          (swapIdx === null && rightChild.piority < element.piority)
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null || !leftChild || !rightChild) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

class Node {
  constructor(val, piority) {
    this.value = val;
    this.piority = piority;
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
