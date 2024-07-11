import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElOrigenDeLaLeyDelOlvidoComponent } from "./el-origen-de-la-ley-del-olvido/el-origen-de-la-ley-del-olvido.component";

@Component({
  selector: 'app-articulo-choose',
  standalone: true,
  imports: [
    CommonModule,
    ElOrigenDeLaLeyDelOlvidoComponent
],
  template: `
  `,
  styleUrl: './articulo-choose.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticuloChooseComponent { }
