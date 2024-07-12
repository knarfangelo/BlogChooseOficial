import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="container-whatsapp">
     <a href="https://wa.me/+51986166823?text=Hola%20Choose%20🦉%20Me%20gustaría%20más%20información%20sobre%20sus%20servicios%20de%20marketing%20digital.%20⚡️" class="float" target="_blank">
    <img src="/icon/whatsapp.svg" class="myfloat" alt="">
  </a></div>
  `,
  styleUrl: './whatsapp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent { 



}
