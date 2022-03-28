import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios= [{id:0,nome:'João'}] ;
 
  aoAdicionar(funcionario: { id: number; nome: string; }){
    
    this.funcionarios.push(funcionario);
    console.log(this.funcionarios);
  }
}
