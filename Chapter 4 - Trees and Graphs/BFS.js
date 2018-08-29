export default function BFS(graph, source, target) {
  let discovered = new Set(),
    queue = [source];

  while (queue.length > 0) {
    let node = queue.shift();
    for (let neighbour of graph[node]) {
      if (!discovered.has(neighbour)) {
        if (neighbour === target) return true;

        discovered.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return false;
}
