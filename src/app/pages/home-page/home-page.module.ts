import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ShortenedLinkFormModule } from '../../components/shortened-link-form/shortened-link-form.module';

export const routes : Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ShortenedLinkFormModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
