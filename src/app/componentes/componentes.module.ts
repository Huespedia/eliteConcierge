import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FoodBarComponent } from './food-bar/food-bar.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { JetsetterComponent } from './jetsetter/jetsetter.component';
import { GaleriaComponent } from './galeria/galeria.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FoodBarComponent,
    Seccion2Component,
    JetsetterComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    FoodBarComponent,
    Seccion2Component,
    JetsetterComponent,
    GaleriaComponent
  ]
})
export class ComponentesModule { }
