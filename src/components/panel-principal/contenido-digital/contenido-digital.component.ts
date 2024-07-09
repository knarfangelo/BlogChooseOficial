import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-contenido-digital',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
  <div class="titulos">
  <p class="titulo-web">Web Y Programacion</p>
  <p class="titulo-olvido">Ley del Olvido</p>
  </div>
  <header>
    <div class="web-programacion">
    <a href="">
    <img src="/panel-principal/desarrollowebinnovacion.png" alt="">
    <div class="contenido-web">
      <ul>
        <li>Contenido digital</li>
        <li>Web y programación</li>
      </ul>
      <p>Tendencias de Diseño Web 2024: Una mirada al futuro</p>
      <div class="fecha">
      <p> <img class="icon-time" src="/icon/time.svg" alt=""> Junio 4, 2024</p>
    </div>
  </div>
  
  </a>
    </div> 
  <aside>
    <div>
    <div class="web-programacion">
    <a href="">
    <img src="/panel-principal/desarrollowebinnovacion.png" alt="">
    <div class="contenido-web">
      <ul>
        <li>Contenido digital</li>
        <li>Web y programación</li>
      </ul>
      <p>Tendencias de Diseño Web 2024: Una mirada al futuro</p>
      <div class="fecha">
      <p> <img class="icon-time" src="/icon/time.svg" alt=""> Junio 4, 2024</p>
    </div>
  </div>
  
  </a>
    </div> 
    
    </div>
    <div>

    <div class="web-programacion">
    <a href="">
    <img src="/panel-principal/desarrollowebinnovacion.png" alt="">
    <div class="contenido-web">
      <ul>
        <li>Contenido digital</li>
        <li>Web y programación</li>
      </ul>
      <p>Tendencias de Diseño Web 2024: Una mirada al futuro</p>
      <div class="fecha">
      <p> <img class="icon-time" src="/icon/time.svg" alt=""> Junio 4, 2024</p>
    </div>
  </div>
  
  </a>
    </div> 

    </div>
  </aside>
</header>
  `,
  styleUrl: './contenido-digital.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoDigitalComponent {

  swiperElements = signal<SwiperContainer | null>(null);

  

 }
