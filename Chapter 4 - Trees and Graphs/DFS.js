export default function DFS(graph, source, target) {
  if (source === target) return true;

  let discovered = new Set();
  discovered.add(source);
  for (let neighbour of graph[source]) {
    if (!discovered.has(neighbour)) {
      if (DFS(graph, discovered, neighbour, target)) return true;
    }
  }
  return false;
}
