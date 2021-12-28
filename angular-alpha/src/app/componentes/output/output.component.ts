import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  // Criar um "anunciador" do evento que enviará um dataset para o componente pai (primario)
  @Output() public anunciador = new EventEmitter<any>();

  // Objeto literal para receber um conjunto de dados
  public objDados: any = {};

  // Criar uma função para - usando o anunciador - enviar os dados para o componente pai
  public enviarDados(): void {
    this.anunciador.emit(this.objDados);
  }

}
