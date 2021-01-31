import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { Gpt3Component } from '.././components/gpt3/gpt3.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent},
  { path: '', component: Gpt3Component},
]


@NgModule({
  declarations: [
    DashboardComponent,
    Gpt3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
