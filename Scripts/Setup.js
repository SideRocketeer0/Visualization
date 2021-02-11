
//eg. node = [[1, [34, 200]], [2, [100, 300]]]
var nodes = [];




function make(){
  //making the start node
  //var x = Math.floor((Math.random()* 650) + 1);
  //var y = Math.floor((Math.random()* 450) + 1);
  //nodes.push[0, [x, y]]; //might make location fixed
  for(let i = 0; i < 8; i++){
    var div = document.createElement("div");
    div.id = i;
    div.className = "node";
    //console.log(positionNode());
    let coordinates = positionNode(i);
    div.style.left = coordinates[0] + "px";
    div.style.top = coordinates[1] + "px";
    document.getElementById("container").appendChild(div);
  }
  //console.log(nodes + " hi " + nodes.length);
}

  //gives the nodes random positions
  //makes sure they are not touching
  /*function positionNode(i){
    var x = Math.floor((Math.random()* 650) + 1);
    var y = Math.floor((Math.random()* 450) + 1);
    console.log(x, y);
    if(nodes.length == 0){
      nodes.push([i, [x, y]]);
      return [x, y];
    } else{
    for( j = 0; j < nodes.length; j++){
      let higherBandx = nodes[j][1][0] + 70;
      let lowerBandx = nodes[j][1][0] - 70;
      let higherBandy = nodes[j][1][1] + 70;
      let lowerBandy = nodes[j][1][1] - 70;
        //if((x <= lowerBandx && x >= higherBandx) || (y <= lowerBandy && y >= higherBandy)){
      if(between(x, lowerBandx, higherBandx) && between(y, lowerBandy, higherBandy)){
            positionNode(i);
        } else {
          //console.log("first conditional - too close " + i + " " + x + " " + y);
          console.log("error " + i);
          //positionNode(i);
          nodes.push([i, [x, y]]);
          return [x, y];
        }

      }
    }
}



  function between(x, min, max){
    return x >= min && x <=max;
  }

  function makePaths(){

}
