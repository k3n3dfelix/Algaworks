import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent implements OnInit {

  @Input() funcionario = {id:1, nome:"Joao"};

  constructor() { }

  ngOnInit(): void {
  }

}
