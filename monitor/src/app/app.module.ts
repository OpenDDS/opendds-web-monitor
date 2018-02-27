import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SidebarModule } from 'ng-sidebar'
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import { AppComponent } from './app.component'

import { SidebarComponent } from './sidebar/sidebar.component'
import { AppRoutingModule } from './app-routing.module'
import { ProcessListComponent } from './process-list/process-list.component'
import { HomepageComponent } from './homepage/homepage.component'
import { GraphViewComponent } from './graph-view/graph-view.component'
import { OpenDdsBridgeService } from './opendds-bridge.service'
import { GridsterModule } from 'angular-gridster2'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    GraphViewComponent,
    ProcessListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SidebarModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [
    OpenDdsBridgeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
