import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  title2 = [ "Number of Consumers", "Number of Producers","Number of Data Readers", "Number of Data Writers", "Number of Samples" ,
  "Number of Topics", "Largest Topic" , "Most Active Writer", "Number of total Writes"];
  value2 = [ "23", "234" , "234", "234", "234", "234", "234", "234", "234"];

  constructor() { }

  ngOnInit() { }
}
