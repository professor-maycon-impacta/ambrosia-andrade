import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent{
  // criar um "anunciador" do evento que enviará um dataset para o componente-pai (primario component)
  @Output() anunciador = new EventEmitter<any>()

  // objeto literal para receber um conjunto de dados
  public objDados: any = {}

  // criar uma função para - usando o anunciado r - enviar os dados para o componente-pai
  public enviarDados(): void{
    this.anunciador.emit(this.objDados)
  }
}
