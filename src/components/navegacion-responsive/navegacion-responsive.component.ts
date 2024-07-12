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
        <li><a href="">WEB Y PROGRAMACION</a></li>
        <li><a href="">LEY DEL OLVIDO</a></li>
        <li><a href="">CONTENIDO DIGITAL</a></li>
        <li><a href="">SOCIAL LISTENING</a></li>
        <li><a href="">AUTOR</a></li>
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
