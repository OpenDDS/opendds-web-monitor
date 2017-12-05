import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProcessListComponent } from './process-list.component';

const routes = [{ path: 'process-list', component: ProcessListComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcessListComponent]
})
export class ProcessListModule { }
