/*
Simple script to rotate the about page 
model to face the user's moouse
*/
let constraint = 20;
let mouseOverContainer = document.getElementById("container");
let model = document.getElementById("model");
let head = document.getElementById("head");

function bodyTransforms(x, y, el) 
{
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constraint*0.25;
  let calcY = (x - box.x - (box.width / 2)) / constraint*0.5;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

function headTransforms(x, y, el) 
{
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constraint*1.05;
  let calcY = (x - box.x - (box.width / 2)) / constraint*1.75;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

mouseOverContainer.onmousemove = function(e) 
{
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([model]);

  window.requestAnimationFrame(function()
  {
    //transformBody(model, position);
    model.style.transform  = bodyTransforms.apply(null, position);
    //transformHead(head, position);
    head.style.transform  = headTransforms.apply(null, position);
  });
};