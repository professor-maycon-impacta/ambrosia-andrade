import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  // criar as propriedades para vinculação via interpolação
  public x: number = 10
  public umArray: Array<number> = [10, 67, 90]
  public dataHoje: Date = new Date()
  public statusBooleano: boolean = false

  public exibirTexto(): string{
    return 'Texto retornado a partir de uma função!'
      }
}
