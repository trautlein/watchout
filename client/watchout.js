var boardOptions = {
  height: 400,
  width: 500,
  numberEnemies: 20
};

d3.select('.board').append('svg')
  .classed('gameboard', true)
  .attr('height', boardOptions.height)
  .attr('width', boardOptions.width);

var axes = {
  x: d3.scale.linear().domain([0, 100]).range([0, boardOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, boardOptions.height])
};

// map evils to 
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
  console.log(d);
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .enter().append('circle')
                  .style('fill', 'red')
                  .attr('r', 7)
                  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
                  .attr('cy', function(d) { return Math.floor(axes.x(d.y)); });
};

var update = function (d) {
  console.log(d);
  d3.select('svg').selectAll('circle')
                  .data(d)
                  .transition()
                  .duration(2000)
                  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
                  .attr('cy', function(d) { return Math.floor(axes.y(d.y)); });
};

start(evils);
update(updateArray());
setInterval(function() { 
  update(updateArray());
}, 2000);

// setInterval(update(function() { updateArray() }), 4000);









