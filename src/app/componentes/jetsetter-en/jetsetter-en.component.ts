import { Component } from '@angular/core';

@Component({
  selector: 'app-jetsetter-en',
  templateUrl: './jetsetter-en.component.html',
  styleUrls: ['./jetsetter-en.component.css']
})
export class JetsetterEnComponent {

  redirect(){
    window.open('https://www.huespedia.com/jetsetters-es/')
  }
}
