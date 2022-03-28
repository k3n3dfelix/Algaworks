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
      'border-width.px' : this.funcionario.id, 
      'background-color' : this.funcionario.id % 2 === 0 ? 'gray' : 'red'
    }
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
