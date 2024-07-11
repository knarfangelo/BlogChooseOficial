import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../components/panel-principal/footer/footer.component";
import { NavegacionResponsiveComponent } from "../components/navegacion-responsive/navegacion-responsive.component";
import { NavegacionComponent } from "../components/navegacion/navegacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavegacionResponsiveComponent, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogChoose';
}
