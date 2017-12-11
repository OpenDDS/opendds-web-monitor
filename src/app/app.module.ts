import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SidebarModule } from 'ng-sidebar'
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessListModule } from './process-list/process-list.module';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GraphViewComponent } from './graph-view/graph-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    GraphViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SidebarModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
    ProcessListModule,
    // RouterModule.forRoot([{ path: "", component: AppComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
