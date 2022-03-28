import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
  // styles: [`
  //   .card-body{
  //     text-transform: uppercase;
  //     color:blue;
  //   }
  // `]
})
export class FuncionarioCardComponent implements OnInit {

  @Input() funcionario = {id:1, nome:"Joao"};

  getEstilosCartao() {
    return{
      
      'background-color' : this.funcionario.id % 2 === 0 ? '#8c8c8c' : '#e6e6e6'
    }
  }

  // getListaClassesCss(){
  //   return ['badge', 'badge-primary'];
  // }

  isAdmin(){
    return this.funcionario.nome.startsWith('T');
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
