import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  // Criar a prop para ser avaliada pela diretiva *ngIf
  // Operador de encadeamento - chaining operator
  exiba!: boolean;

}
