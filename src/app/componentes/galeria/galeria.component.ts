import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {


  redirect(){
    window.open('https://api.whatsapp.com/send?phone=573135061763')
  }
}
