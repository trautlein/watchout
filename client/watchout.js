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

// var move = d3.select('svg').selectAll('circle')
//   .data(evils)
//   .enter().append('circle')
//   .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
//   .attr('cy', function(d) { return Math.floor(axes.x(d.y)); })
//   .attr('r', 7)
//   .style('fill', 'red')
//   .transition()
//   .duration(3000);


var update = function (d) {
  d3.select('svg').selectAll('circle')
               .data(evils)
               .enter().append('circle')
               .style('fill', 'red')
               .transition()
               .duration(2000)
               .attr('cx', function(d) { return Math.floor(axes.x(d.x)); })
               .attr('cy', function(d) { return Math.floor(axes.x(d.y)); })
               .attr('r', 7);
};


// var xtime = _.map(_.range(0, boardOptions.numberEnemies), function (i) {
//   var obj = {};

//   obj.id = i;
//   obj.x = Math.random() * 100;
//   obj.y = Math.random() * 100;
  
//   return obj;
// });

update(evils);
