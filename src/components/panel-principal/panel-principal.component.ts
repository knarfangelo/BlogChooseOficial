import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContenidoDigitalComponent } from "./contenido-digital/contenido-digital.component";

@Component({
  selector: 'app-panel-principal',
  standalone: true,
  imports: [
    CommonModule,
    ContenidoDigitalComponent
],
  template: `
    <main>
      <app-contenido-digital></app-contenido-digital>
    </main>
  `,
  styleUrl: './panel-principal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelPrincipalComponent { }
