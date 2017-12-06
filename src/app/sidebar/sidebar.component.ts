import { Component, OnInit } from '@angular/core'
import navItems from './navItems'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened: boolean = true
  test: string = 'testing...'
  navItems: Array<object> = navItems


  toggleSidebar() {
    this.opened = !this.opened
  }

  constructor() { 
  }

  ngOnInit() {
    
  }

}
