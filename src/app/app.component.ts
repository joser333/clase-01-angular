import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase-02-angular';

  contador = 0;

  sumar(){
    this.contador++;
    alert(this.contador);
  }

  saludar(){
    alert("Hola!!!");
  }
}
