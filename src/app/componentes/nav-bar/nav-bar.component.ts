import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router'; // Importa NavigationEnd y Event
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'; // Importa el operador filter


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent implements OnInit, OnDestroy {
  showMenu:boolean=true;

  public esPaginaEnIngles: boolean = false;
  private routerSubscription: Subscription | undefined;

  // Rutas (ajusta según tu configuración)
  private rutaHomeEspanol: string = '/home'; // o '/', '/inicio', etc.
  private rutaHomeIngles: string = '/home-en';

  constructor(private router: Router){
    window.addEventListener('resize',()=>{
      if(window.innerWidth<800){
        this.showMenu = false
      }else{
        this.showMenu = true
      }
    })
  }
  ngOnDestroy(): void {
    // Es importante desuscribirse para evitar fugas de memoria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  ngOnInit(){
    if(window.innerWidth<800){
      this.showMenu = false
    }
    // Establece el estado inicial basado en la URL actual al cargar el componente
    this.actualizarVisibilidadBoton(this.router.url);

    // Suscríbete a los eventos de cambio de ruta
    this.routerSubscription = this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.actualizarVisibilidadBoton(event.urlAfterRedirects);
    });
  }

  private actualizarVisibilidadBoton(urlActual: string): void {
    // Comprueba si la URL actual (limpia de parámetros de consulta o fragmentos si los hubiera)
    // coincide con la ruta de la versión en inglés.
    const urlBase = urlActual.split('?')[0].split('#')[0];
    console.log('actualizar vista')
    if (urlBase === this.rutaHomeIngles) {
      this.esPaginaEnIngles = true;
    } else {
      // Si no es la página en inglés, asumimos que es la de español (o la base)
      // Puedes hacer esta lógica más específica si tienes más idiomas o rutas base.
      this.esPaginaEnIngles = false;
    }
    console.log(`URL Actual: ${urlActual}, esPaginaEnIngles: ${this.esPaginaEnIngles}`); // Para depuración
  }
  
  AbrirMenu(){
    this.showMenu = !this.showMenu
  }
  toggleLanguage(): void {
    console.log(`Intentando cambiar idioma. esPaginaEnIngles actual: ${this.esPaginaEnIngles}`);
    if (this.esPaginaEnIngles) {
      // Si actualmente está en inglés, navega a español
      this.router.navigateByUrl(this.rutaHomeEspanol)
        .then(() => console.log(`Navegado a español: ${this.rutaHomeEspanol}`))
        .catch(err => console.error('Error navegando a español:', err));
    } else {
      // Si actualmente está en español, navega a inglés
      this.router.navigateByUrl(this.rutaHomeIngles)
        .then(() => console.log(`Navegado a inglés: ${this.rutaHomeIngles}`))
        .catch(err => console.error('Error navegando a inglés:', err));
    }
     // Opcional: cierra el menú si está abierto en móvil después de hacer clic
     if (window.innerWidth < 800) {
        this.showMenu = false;
     }
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


