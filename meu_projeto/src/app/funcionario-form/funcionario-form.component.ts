import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  ultimoID = 0;
  title = 'meu_projeto';
  nome = 'Kened';
  adicionado = false;
  
  @Output() funcionarioAdicionado = new EventEmitter();
  
  adicionar(){
    //this.nome = nome;
    // console.log(`Adicionado ${this.nome}`);

    // const numero = Math.round(Math.random() * 100);
    // this.nome = 'João ' + numero;

    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
    
   const funcionario= {
      id: ++this.ultimoID,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

  // alterarNome(event: any){
  //   console.log(event);
  //   this.nome = event.target.value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
