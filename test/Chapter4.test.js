import { expect } from 'chai';

import Graph from '../Data Structures/Graph';
import BFS   from '../Chapter 4 - Trees and Graphs/BFS';
import DFS   from '../Chapter 4 - Trees and Graphs/DFS';

describe('Chapter 4 - Trees and Graphs', () => {
  describe('#BFS()', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');

    // expect(BFS(graph, 'A', 'C')).to.be.true;
    // expect(BFS(graph, 'A', 'E')).to.be.false;
    // expect(BFS(graph, 'B', 'A')).to.be.true;
    // expect(BFS(graph, 'D', 'E')).to.be.true;
  });
});
