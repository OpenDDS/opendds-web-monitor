import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessListModule } from './process-list/process-list.module';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProcessListModule,
    // RouterModule.forRoot([{ path: "", component: AppComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
