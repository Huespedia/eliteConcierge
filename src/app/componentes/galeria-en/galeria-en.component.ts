import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-en',
  templateUrl: './galeria-en.component.html',
  styleUrls: ['./galeria-en.component.css']
})
export class GaleriaEnComponent {
  redirect(){
    window.open('https://api.whatsapp.com/send?phone=573135061763')
  }
}
