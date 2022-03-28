import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu_projeto';
  nome = 'Kened';
  adicionado = false;

  adicionar(){
    //this.nome = nome;
    // console.log(`Adicionado ${this.nome}`);

    // const numero = Math.round(Math.random() * 100);
    // this.nome = 'João ' + numero;

    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
  }

  // alterarNome(event: any){
  //   console.log(event);
  //   this.nome = event.target.value;
  // }
}
