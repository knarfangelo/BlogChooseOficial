import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion-responsive',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header>
    <div class="botones-imagenes">
      <button (click)="toggleNavbar()">
        <img class="navchoose" src="/icon/nav-responsive.svg" alt="navChoose">
      </button>
      <img class="flecha" src="/icon/flecha.svg" alt="">
      <img class="logochoose" src="/navegacion/novedades/logo.png" alt="logoChoose">
    </div>  </header>
    <nav class="button-nav" [class.open]="isOpen">
      <ul>
        <li><a href="">DESARROLLO WEB</a></li>
        <li><a href="">CREACIÓN DE CONTENIDO</a></li>
        <li><a href="#contenido">SOCIAL LISTENING</a></li>
        <li><a href="">REGULACION DE CONTENIDO</a></li>
        <li><a href="#autor">ENVIOS MASIVOS</a></li>
      </ul>
    </nav>

  `,
  styleUrls: ['./navegacion-responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionResponsiveComponent implements OnInit {
  isOpen = false;
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  closeNavbar() {
    this.isOpen = false;
  }

  ngOnInit(): void {

  }

}
