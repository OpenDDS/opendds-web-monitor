import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
//import './graph-view.js';

//declare function init();

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init();
  }
}

class Node {
  text: string;
  x: number;
  y: number;
  topics: Array<Topic>;
  radius: number;
  color: string;

  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.topics = [];
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.font = '15px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline="middle"; 
    ctx.fillStyle = 'white';
    ctx.fillText(this.text, this.x, this.y);
  }
}

class Reader extends Node {

  constructor(text, x, y) {
    super(text, x, y);
    this.radius = 10;
    this.color = 'blue';
  }

  receive() {

  }
}

class Writer extends Node {
  constructor(text, x, y) {
    super(text, x, y);
    this.radius = 10;
    this.color = 'red';
  }

  send() {
    
  }
}

class Topic extends Node {
  connections: Array<Node>;

  constructor(text, x, y) {
    super(text, x, y);
    this.radius = 20;
    this.color = 'green';
    this.connections = [];
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.font = '25px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline="middle"; 
    ctx.fillStyle = 'white';
    ctx.fillText(this.text, this.x, this.y);
    
    // draw lines
    ctx.globalCompositeOperation='destination-over'; 
    for (var i = 0; i < this.connections.length; i++) {          
      ctx.beginPath();
      ctx.moveTo(this.x,this.y);
      ctx.lineTo(this.connections[i].x, this.connections[i].y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
    ctx.globalCompositeOperation='source-over';
  }
}

class Domain {
  
}

var canvas;// = <HTMLCanvasElement> $('canvas').get(0);;
var context;// = <CanvasRenderingContext2D> canvas.getContext('2d');;

var topic = new Topic('T', 300, 300);
var reader = new Reader('R', 50, 50);
var writer = new Writer('W', 400, 500);

function init() {
  canvas = <HTMLCanvasElement> $('canvas')[0];
  context = <CanvasRenderingContext2D> canvas.getContext("2d");
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  topic.connections.push(reader);
  topic.connections.push(writer);
    
  topic.draw(context);
  reader.draw(context);
  writer.draw(context);
  console.log("canavas drawn!");
}

/*
$(document).ready(function() {  
  canvas = $('canvas')[0];
  context = canvas.getContext("2d");
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  topic.connections.push(reader);
  topic.connections.push(writer);
    
  topic.draw(context);
  reader.draw(context);
  writer.draw(context);
  console.log("canavas drawn!");
});
*/

$(canvas).click(function(event) {

  console.log("clicked canvas!");
  //canvas = $('canvas').get(0);
  //context = canvas.getContext('2d');
            
  var newNode = new Reader('R', event.pageX, event.pageY);
  topic.connections.push(newNode);
  newNode.draw(context);
  topic.draw(context);
            
});  