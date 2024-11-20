import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  redirect(){
    window.open('https://api.whatsapp.com/send?phone=573135061763')
  }
}
