import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HomeEnComponent } from './homeEn/home-en/home-en.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeEnComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PagesModule { }
