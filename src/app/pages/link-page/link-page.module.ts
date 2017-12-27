import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkPageComponent } from './link-page.component';
import { RouterModule, Routes } from '@angular/router';

export const routes : Routes = [
  {
    path: ':i',
    component: LinkPageComponent
  }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [LinkPageComponent],
  exports: [LinkPageComponent]
})
export class LinkPageModule { }
