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
  x: d3.scale.linear().domain([0, 100]).range([0, boardOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, boardOptions.height])
};

//Good Guy
var goodGuy = [{
  id: 'good',
  x: 250,
  y: 200,
  fill: 'blue',
  r: 9
}];



//Bad Guy Stuff
var evils = _.map(_.range(0, boardOptions.numberEnemies), function (i) {
  var obj = {
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100
  };
  return obj;
});

var updateArray = function() {
  var newArray = [];
  for (var i = 0; i < boardOptions.numberEnemies; i++) {
    newArray.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    });
  }
  return newArray;
};

var start = function (d) {
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .enter().append('circle')
                  .style('fill', 'red')
                  .attr('r', 7)
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
                  .attr('x', function() { return 240; })
                  .attr('y', function() { return 190; });
};

var update = function (d) {
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .transition()
                  .duration(2000)
                  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
                  .attr('cy', function(d) { return Math.floor(axes.y(d.y)); });
};

//
start(evils);
startPlayer(goodGuy);
update(updateArray());
setInterval(function() { 
  update(updateArray());
}, 2000);

// setInterval(update(function() { updateArray() }), 4000);









