// Put your JavaScript here
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 300, 0, 2*Math.PI)
ctx.fillStyle = "#035769";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 250, 0, 2*Math.PI)
ctx.fillStyle = "#09819A";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2*Math.PI)
ctx.fillStyle = "#0A98B4";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 150, 0, 2*Math.PI)
ctx.fillStyle = "#09819A";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 100, 0, 2*Math.PI)
ctx.fillStyle = "#1BAECC";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 50, 0, 2*Math.PI)
ctx.fillStyle = "#035769";
ctx.fill();
ctx.closePath();