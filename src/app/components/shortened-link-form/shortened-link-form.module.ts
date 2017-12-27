import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenedLinkFormComponent } from './shortened-link-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule 
  ],
  declarations: [ShortenedLinkFormComponent],
  exports: [ShortenedLinkFormComponent]
})
export class ShortenedLinkFormModule { }
