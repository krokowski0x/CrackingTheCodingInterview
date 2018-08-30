export default function TowersOfHanoi(n) {
  this.first = [];
  this.second = [];
  this.third = [];
  for (let i = n; i >= 1; i--) {
    this.first.push(i);
  }
}

TowersOfHanoi.prototype.move = function(start, mid, dest, depth) {
  if (depth === 0) {
    return;
  } else if (depth === 1) {
    dest.push(start.pop());
  } else {
    let currDepth = depth;
    let shortTower;
    let placePiece;
    if (depth % 2 === 0) {
      shortTower = mid;
      placePiece = dest;
    } else {
      shortTower = dest;
      placePiece = mid;
    }
    let shortTowerDepth = 0;
    shortTower.push(start.pop());
    shortTowerDepth++;
    currDepth--;
    let towerSwap1;
    let towerSwap2;
    while (currDepth > 0) {
      placePiece.push(start.pop());
      currDepth--;
      this.move(shortTower, start, placePiece, shortTowerDepth);
      shortTowerDepth++;
      towerSwap1 = shortTower;
      towerSwap2 = placePiece;
      shortTower = towerSwap2;
      placePiece = towerSwap1;
    }
  }
};
