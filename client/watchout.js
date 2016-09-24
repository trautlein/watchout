//Board Stuff
var boardOptions = {
  height: 400,
  width: 500,
  numberEnemies: 20
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
                  .style('fill', 'red')
                  .attr('r', 10)
                  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
                  .attr('cy', function(d) { return Math.floor(axes.x(d.y)); });
};

var startPlayer = function (d) {
  console.log('test');
  d3.select('svg').selectAll('rect')
                  .data(d)
                  .enter().append('rect')
                  .attr('width', 20)
                  .attr('height', 20)
                  .style('fill', 'blue')
                  .attr('x', function() { return 0; })
                  .attr('y', function() { return 0; })
                  .call(drag);
};

var update = function (d) {
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .transition()
                  .duration(4000)
                  .attr('cx', function(d) { return Math.random() * 500; })
                  .attr('cy', function(d) { return Math.random() * 400; });
};

//
start(evils);

startPlayer(goodGuy);

update(updateArray());


var updated;
setInterval(function() {
  updated = updateArray();
  console.log(updated);
  update(updated);
}, 4000);

// setInterval(update(function() { updateArray() }), 4000);









