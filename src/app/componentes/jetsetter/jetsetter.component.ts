import { Component } from '@angular/core';

@Component({
  selector: 'app-jetsetter',
  templateUrl: './jetsetter.component.html',
  styleUrls: ['./jetsetter.component.css']
})
export class JetsetterComponent {


  redirect(){
    window.open('https://www.huespedia.com/jetsetters-es/')
  }
}
