import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent{
  // criando nossas propriedades
  cores: string = '#380F6C'
  tamanho: number = 12
  objNgStyle: EstiloClasse = new EstiloClasse()

}
// criando a classe para vincular na view 
class EstiloClasse{
  'color': string = '#33C9FF'
  'font-size.%': number = 80
  'font-weight': string = 'bold'
}
