import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoID = 0;
  title = 'meu_projeto';
  nome = 'Kened';
  adicionado = false;
  funcionarios= [{id:0,nome:'João'}] ;
  
  adicionar(){
    //this.nome = nome;
    // console.log(`Adicionado ${this.nome}`);

    // const numero = Math.round(Math.random() * 100);
    // this.nome = 'João ' + numero;

    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.ultimoID,
      nome: this.nome
    });
  }

  // alterarNome(event: any){
  //   console.log(event);
  //   this.nome = event.target.value;
  // }
}
