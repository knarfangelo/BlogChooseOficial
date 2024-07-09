import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { PanelPrincipalComponent } from "../panel-principal/panel-principal.component";

@Component({
  selector: 'app-blog-choose',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    PanelPrincipalComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-panel-principal></app-panel-principal>
  `,
  styleUrl: './blog-choose.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogChooseComponent { 


}
