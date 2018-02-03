import { Component, OnInit } from '@angular/core'
import processes from './processes'

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css'],
})

export class ProcessListComponent implements OnInit {
  processes: Array<object> = processes

  constructor() { }

  ngOnInit() {
  }
}
