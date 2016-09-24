//Board Stuff
var boardOptions = {
  height: 400,
  width: 500,
  numberEnemies: 2
};

d3.select('.board').append('svg')
  .classed('gameboard', true)
  .attr('height', boardOptions.height)
  .attr('width', boardOptions.width);

//Scale Stuff
var axes = {
  x: d3.scale.linear().domain([0, 500]).range([0, boardOptions.width]),
  y: d3.scale.linear().domain([0, 400]).range([0, boardOptions.height])
};


var drag = d3.behavior.drag()
  .on('drag', function(d, i) {
    d.x += d3.event.dx;
    d.y += d3.event.dy;
    d3.select(this).attr('transform', function (d, i) {
      return 'translate(' + [d.x, d.y] + ')';
    });
  });

  // var collisionChecker() {

  // }

//Good Guy
var goodGuy = [{
  id: 'good',
  x: 0,
  y: 0,
  fill: 'blue',
  r: 9
}];

//Bad Guy Stuff
var evils = _.range(0, boardOptions.numberEnemies).map(function (i) {
  var obj = {
    id: i,
    x: Math.random() * 500,
    y: Math.random() * 400
  };
  return obj;
});

var updateArray = function() {
  var newArray = [];
  for (var i = 0; i < boardOptions.numberEnemies; i++) {
    newArray.push({
      id: i,
      x: Math.random() * 500,
      y: Math.random() * 400
    });
  }
  return newArray;
};

var start = function (d) {
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .enter().append('circle')
                  .attr('class', 'enemy')
                  .style('fill', 'red')
                  .attr('r', 10)
                  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
                  .attr('cy', function(d) { return Math.floor(axes.x(d.y)); });
};

var startPlayer = function (d) {
  d3.select('svg').selectAll('rect')
                  .data(d)
                  .enter().append('rect')
                  .attr('width', 20)
                  .attr('height', 20)
                  .style('fill', 'blue')
                  .attr('x', function() { return 0; })
                  .attr('y', function() { return 0; })
                  .attr('r', 10)
                  .call(drag);
};

var update = function (evils) {
  d3.select('svg').selectAll('circle')
                  .data(evils)
                  .transition()
                  .duration(4000)
                  .attr('cx', function(d) { d.cx = Math.random() * 500; return d.cx; })
                  .attr('cy', function(d) { d.cy = Math.random() * 400; return d.cy; });

  var evilsArr = d3.selectAll('circle');
  var fromX = evilsArr[0];
  var endY;
  
  for (var i = 0; i < evilsArr[0].length; i++) {
    endX = evilsArr[0][i]['cx'];
    endY = evilsArr[0][i]['cy'];
    console.log(evilsArr[0][i]);
  }

  var collisionChecker = function() {
    //
  };
};


start(evils);

startPlayer(goodGuy);

update(updateArray());


var updated;
setInterval(function() {
  updated = updateArray();
  update(updated);
}, 4000);







