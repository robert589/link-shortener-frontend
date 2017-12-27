import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats-page.component';
import { Routes } from '@angular/router';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RouterModule } from '@angular/router';

export const routes : Routes = [
  {
    path: '',
    component: StatsPageComponent
  }
];


@NgModule({
  imports: [
    CommonModule, NgxDatatableModule, RouterModule.forChild(routes)
  ],
  declarations: [StatsPageComponent]
})
export class StatsPageModule { }
