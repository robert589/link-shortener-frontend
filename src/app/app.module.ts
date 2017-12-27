import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

export const routes : Routes = [{
  path: '',
  loadChildren: './pages/home-page/home-page.module#HomePageModule',

}, {
  path: 'i',
  loadChildren: './pages/link-page/link-page.module#LinkPageModule',

}, {
  path: 'stats',
  loadChildren: './pages/stats-page/stats-page.module#StatsPageModule',

}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
