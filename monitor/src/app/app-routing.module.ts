import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProcessListComponent } from './process-list/process-list.component'
import { AppComponent } from './app.component'
import { HomepageComponent } from './homepage/homepage.component'
import { GraphViewComponent } from './graph-view/graph-view.component'


const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'process-list', component: ProcessListComponent, pathMatch: 'full' },
  { path: 'graph-view', component: GraphViewComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
