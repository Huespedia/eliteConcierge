import { Component } from '@angular/core';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent {


  redirect(){
    window.open('https://api.whatsapp.com/send?phone=573135061763')
  }
}
