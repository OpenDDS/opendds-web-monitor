import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  } 

  canvas: HTMLCanvasElement;// = <HTMLCanvasElement> $('canvas').get(0);;
  context: CanvasRenderingContext2D;// = <CanvasRenderingContext2D> canvas.getContext('2d');;

  topic: Topic = new Topic('T', 300, 300);
  reader: Reader = new Reader('R', 50, 50);
  writer: Writer = new Writer('W', 400, 500);

  activeTopic: Topic = this.topic;

  nodeType: String = "reader";

  init() {
    this.canvas = <HTMLCanvasElement> $('canvas')[0];
    this.context = <CanvasRenderingContext2D> this.canvas.getContext("2d");
    this.context.canvas.width  = window.innerWidth;
    this.context.canvas.height = window.innerHeight;

    this.topic.connections.push(this.reader);
    this.topic.connections.push(this.writer);
      
    this.topic.draw(this.context);
    this.reader.draw(this.context);
    this.writer.draw(this.context);
    console.log("canavas drawn!");
  }

  addNode(event) {
    console.log("clicked canvas!");
    let newNode: Node;
    //canvas = $('canvas').get(0);
    //context = canvas.getContext('2d');
    switch (this.nodeType) {
      case 'reader':
        newNode = new Reader('R', event.pageX, event.pageY);
        break;
      case 'writer':
        newNode = new Writer('W', event.pageX, event.pageY);
        break;
      case 'topic':
        newNode = new Topic('T', event.pageX, event.pageY);
        this.activeTopic = <Topic>newNode;
        break;
    }
    this.activeTopic.connections.push(newNode);
    newNode.draw(this.context);
    this.activeTopic.draw(this.context);      
  };  
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
