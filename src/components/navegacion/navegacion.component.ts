import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { INovedades } from './BDNavegacion/INovedades';
import { novedadesJSON } from './BDNavegacion/novedadesJSON';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-navegacion',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <h1><a href="">Blog CHÒÓSE</a> </h1>
    <nav>
      <li><a href="">WEB Y PROGRAMACION</a> </li>
      <li> - </li>
      <li><a href="">LEY DEL OLVIDO</a> </li>
      <li> - </li>
      <li><a href="">CONTENIDO DIGITAL</a> </li>
      <li> - </li>
      <li><a href="">SOCIAL LISTENING</a> </li>
      <li> - </li>
      <li><a href="">AUTOR</a></li>
    </nav>
    <div class="container-novedades">
      <p class="titulo-novedades">Novedades</p>
      <swiper-container init=false class="swiper-navegacion">
        @for (item of items; track $index) {
          <swiper-slide>
            <a href="">
            <div class="swiper-style">
            <img [src]="item.img" [alt]="item.titulo">
            <p>{{item.titulo}}</p>
            </div></a>
          </swiper-slide>
        }
      </swiper-container>
    </div>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { 

  swiperElements = signal<SwiperContainer | null>(null);
  items:INovedades[] = novedadesJSON;

    ngOnInit(): void {
      const swiperElemConstructor = document.querySelector('.swiper-navegacion');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        autoplay:true,
        slidesPerView: 'auto',
        speed: 2000,
        breakpoints: {
          0:{
            slidesPerView:1,
          },
          640: {
            slidesPerView:2,
          },
          1024: {
            slidesPerView:3,
          },
        },
        spaceBetween: 25,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();
    }
  

 }
