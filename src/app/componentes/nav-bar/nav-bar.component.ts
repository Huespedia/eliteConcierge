import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent {
  showMenu:boolean=true;

  constructor(){
    window.addEventListener('resize',()=>{
      if(window.innerWidth<800){
        this.showMenu = false
      }else{
        this.showMenu = true
      }
    })
  }

  ngOnInit(){
    if(window.innerWidth<800){
      this.showMenu = false
    }
  }
  
  AbrirMenu(){
    this.showMenu = !this.showMenu
  }

  redirect(hotel: string){
    switch (hotel) {
      case "voila":
        window.open('https://bevoila.com/')
        break
      case "encore":
          window.open('https://www.huespedia.com/encore-residences-es/')
          break
      case "stay":
        window.open('http://huespediastay.com/')
        break
      case "Jetsetters":
          window.open('https://www.huespedia.com/jetsetters-es/')
          break
      case "blog":
        window.open('https://www.huespedia.com/blog-tropical-nomad/')
        break
      case "contact":
        window.open('https://api.whatsapp.com/send?phone=573135061763')
        break
    }
  }
}


