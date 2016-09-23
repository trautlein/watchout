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


var axes = {
  x: d3.scale.linear().domain([0, 100]).range([0, boardOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, boardOptions.height])
};

var evils = _.map(_.range(0, boardOptions.numberEnemies), function (i) {
  var obj = {};

  obj.id = i;
  obj.x = Math.random() * 100;
  obj.y = Math.random() * 100;
  
  return obj;
});


d3.select('svg').selectAll('circle')
  .data(evils)
  .enter().append('circle')
  .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
  .attr('cy', function(d) { return Math.floor(axes.x(d.y)); })
  .attr('radius', 10)
  .style('fill', 'yellow');
  // .attr('fill', 'black');


// debugger;
// var evils = d3.select('circle.enemy')
//               .data(evils, function(d) { return d.id; });

// evils.enter()
//      .append('svg:circle')
//        .attr('class', 'evil')
//        .attr('cx', function(d) { return axes.x(d.x); })
//        .attr('cy', function(d) { return axes.y(d.y); })
//        .attr('r', 10);

