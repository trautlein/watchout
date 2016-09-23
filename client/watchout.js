// start slingin' some d3 here.

var boardOptions = {
  height: 400,
  width: 500
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

var rangeEvil = _.range(0, 10);

var makeEvils = _.map(rangeEvil, function (i) {
  var obj = {};

  obj.id = i;
  obj.x = Math.floor(Math.random() * 100);
  obj.y = Math.floor(Math.random() * 100);
  
  return obj;
});

debugger;
var evils = d3.select('circle.enemy')
              .data(makeEvils, function(d) { return d.id; });

evils.enter()
     .append('svg:circle')
       .attr('class', 'evil')
       .attr('cx', function(d) { return axes.x(d.x); })
       .attr('cy', function(d) { return axes.y(d.y); })
       .attr('r', 10);

