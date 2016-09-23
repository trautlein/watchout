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