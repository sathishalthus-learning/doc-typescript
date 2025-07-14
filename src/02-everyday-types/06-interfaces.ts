// interface types

interface iPoint {
  x: number;
  y: number;
}
 
function printCoord(pt: iPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });