import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './components/somar';
import { SomarService } from './services';

@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ],
  providers: [
    SomarService
  ]
})
export class SomarModule { }
