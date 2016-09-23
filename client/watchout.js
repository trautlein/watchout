// start slingin' some d3 here.

var boardOptions = {
  height: 400,
  width: 500,
  numberEnemies: 20
};


// svg that everything operates in
d3.select('.board').append('svg')
  .classed('gameboard', true)
  .attr('height', boardOptions.height)
  .attr('width', boardOptions.width);

//
var axes = {
  x: d3.scale.linear().domain([0, 100]).range([0, boardOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, boardOptions.height])
};

var evils = _.map(_.range(0, boardOptions.numberEnemies), function (i) {
  var obj = {};

  obj.id = i;
  obj.x = Math.floor(Math.random() * 100);
  obj.y = Math.floor(Math.random() * 100);
  
  return obj;
});


d3.select(".gameboard").selectAll("svg")
  .data([{id: 0, x: 30, y: 40}, {id: 1, x: 80, y: 60}])
  .enter().append('svg:circle')
  .attr('cx', function(d) { return axes.x(d.x); })
  .attr('cy', function(d) { return axes.x(d.y); })
  .attr('radius', 10)
  .style('color', 'black')
  .style('z-index', 1000);

// debugger;
// var evils = d3.select('circle.enemy')
//               .data(evils, function(d) { return d.id; });

// evils.enter()
//      .append('svg:circle')
//        .attr('class', 'evil')
//        .attr('cx', function(d) { return axes.x(d.x); })
//        .attr('cy', function(d) { return axes.y(d.y); })
//        .attr('r', 10);

