import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  // Definição das propriedades de entrada de dados
  @Input() public mensagem: string = '';
  @Input('alerta') public outraMensagem: string = '';

  // Definindo a função
  public exibirMensagemAlerta(): void{
    alert(this.outraMensagem);
  }

}
