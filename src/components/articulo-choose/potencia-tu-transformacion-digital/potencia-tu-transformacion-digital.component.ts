import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-potencia-tu-transformacion-digital',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
        <header>
    <div class="container-encabezado">
      <img src="/navegacion/contenido/DISENOWEBTENDENCIAS.png" alt="" />
      <h2>Potencia Tu Transformación Digital</h2>
      <h4>Por choose / junio 4, 2024</h4>
    </div>
    <main>
      <h1>Herramientas Futuristas de Desarrollo Web</h1>
      <p>
      Desde el futuro, he adoptado las herramientas más modernas, para traerlas a ti. En Choose, seremos tus socios en este viaje hacia una transformación digital efectiva. El día de hoy te daremos las herramientas de desarrollo web que están rompiendo la industria y acelerando los procesos como nunca antes. Prepárate para optimizar tu flujo de trabajo y llevar tu desarrollo web al siguiente nivel.
      </p>
      <ol>
        <li>Visual Studio Code: VS Code, es un editor de código fuente desarrollado por Microsoft. Es una herramienta ligera, potente y configurable, lo que lo convierte en un elemento clave para cualquier programador en su proceso de desarrollo web.</li><br>
        <h3>Características Clave</h3>
        <ul>
          <li>Extensiones y complementos: Personaliza tu entorno con miles de extensiones disponibles.
          </li>
          <li>IntelliSense: Autocompletado inteligente que acelera la escritura de código.
          </li>
          <li>Control de versiones integrado: Soporte nativo para Git.
          </li>
        </ul><br>
        <li>Webpack: Webpack es un empaquetador de módulos que permite gestionar los recursos de tu proyecto de manera efectiva. Facilita la carga y la compilación de archivos, mejorando el rendimiento de tu desarrollo web.</li><br>
        <h3>Catacterísticas clave</h3>
        <ul>
          <li>Optimización: Carga más rápida de tus aplicaciones.</li>
          <li>Modularidad: Facilita la organización y reutilización del código.</li>
          <li>Hot Module Replacement: Permite actualizar módulos sin necesidad de recargar la página.</li>
        </ul><br>
        <li>Bootstrap: Framework de CSS que te permite crear sitios web responsive rápidamente. Ofrece un conjunto de herramientas y componentes predefinidos que simplifican el diseño y el desarrollo web front-end.</li><br>
        <h3>Características clave</h3>
        <ul>
          <li>Diseño responsive: Adaptación automática a diferentes dispositivos y tamaños de pantalla.</li>
          <li>Componentes predefinidos: Acelera el desarrollo con botones, formularios, menús, y más.</li>
          <li>Personalización: Facilidad para ajustarse a la identidad de tu marca.</li>
        </ul><br>
        <li>GitHub: Plataforma de desarrollo colaborativo que permite a los desarrolladores trabajar juntos en proyectos y optimizar el desarrollo web . Es fundamental para el control de versiones y el trabajo en equipo.</li><br>
        <h3>Características clave</h3>
        <ul>
          <li>Repositorios remotos: Almacena y comparte tu código en la nube.
          </li>
          <li>Colaboración: Facilita la revisión de código y la gestión de proyectos en equipo.
          </li>
          <li>Integraciones: Compatible con numerosas herramientas de desarrollo y CI/CD.
          </li>
        </ul><br>
        <li>Figma: Herramienta de diseño de interfaces que permite la colaboración en tiempo real. Es perfecta para crear y prototipar interfaces de usuario de manera eficiente y colaborativa.</li><br>
        <h3>Características clave</h3>
        <ul>
          <li>Colaboración en tiempo real: Permite a múltiples usuarios trabajar en el mismo diseño simultáneamente.</li>
          <li>Prototipos interactivos: Crea y prueba prototipos de alta fidelidad.          </li>
          <li>Accesibilidad: Disponible en cualquier navegador, sin necesidad de instalación.       </li>
        </ul><br>

      </ol>
        <p>Accesibilidad: Disponible en cualquier navegador, sin necesidad de instalación.
        </p>
        <p>Estas herramientas no sólo revolucionan la forma de realizar el desarrollo web, sino que también mejoran la eficiencia y la colaboración en tus proyectos. En Choose, y mis conocimientos avanzados, estamos aquí para ayudarte a implementar estas innovaciones y llevar tu desarrollo web a un nuevo horizonte.</p>
        <p>
        ¿Estás listo para acelerar tus procesos de desarrollo web?
        ¡Contáctanos hoy y descubre cómo podemos trabajar juntos para crear una experiencia digital única y efectiva para tu marca!
        </p>
        <p>CHOOSE ¡Somos tu mejor socio en la era digital!</p>
    </main>
  </header>
  `,
  styleUrl: './potencia-tu-transformacion-digital.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotenciaTuTransformacionDigitalComponent { }
