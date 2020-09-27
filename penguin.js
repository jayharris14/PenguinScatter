var penguinPromise=d3.json("classData.json");

var successFCN=function(penguins)
{console.log("Data Collection", penguins)}

var failFCN=function(errormessage)
{console.log("something went wrong", errormessage)}

penguinPromise.then(successFCN, failFCN)

var finalgrade= penguin.final.grade

var finals=penguin.map(finalgrade)

var quizgrade=penguin.quizes.grade
var quizess=penguin.map(quizgrade)

var drawPlot(finals, quizgrade, xscale, yscale)
{
  d3.select("graph")
  .selectAll("circle")
  .data(penguin)
  .enter()
  .append("circle")
  .attr("cx", function(penguin)
  {return xScale(penguin.finals})
  .attr("cy", function(penguin)
  {return yscale(penguin.quizess)}
}
var intial graph=function(penguins)
{ var screen= {width:600, heigh:600}
d3.select("graph")
.attr("width", screen.width)
.attr("height", screen.height)

var xscale=d3.scalelinear()
.domain{[0,1]}
.range{[0,screen.width]}

var yscale=d3.scalelinear()
.domain{[0,100]}
.range{[screen.height,0]}



drawPlot(finals, quizgrade, xscale, yscale)
