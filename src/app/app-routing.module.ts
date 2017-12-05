import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessListComponent } from './process-list/process-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'process-list', component: ProcessListComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
