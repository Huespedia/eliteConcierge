import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FoodBarComponent } from './food-bar/food-bar.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { JetsetterComponent } from './jetsetter/jetsetter.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { WppButtonComponent } from './wppButton/wpp-button/wpp-button.component';
import { Seccion2EnComponent } from './seccion2-en/seccion2-en.component';
import { GaleriaEnComponent } from './galeria-en/galeria-en.component';
import { JetsetterEnComponent } from './jetsetter-en/jetsetter-en.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FoodBarComponent,
    Seccion2Component,
    JetsetterComponent,
    GaleriaComponent,
    WppButtonComponent,
    Seccion2EnComponent,
    GaleriaEnComponent,
    JetsetterEnComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    FoodBarComponent,
    Seccion2Component,
    JetsetterComponent,
    GaleriaComponent,
    WppButtonComponent,
    Seccion2EnComponent,
    GaleriaEnComponent,
    JetsetterEnComponent
  ]
})
export class ComponentesModule { }
