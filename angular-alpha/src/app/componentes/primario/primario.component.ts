import { Component } from '@angular/core';

@Component({
  selector: 'app-primario',
  templateUrl: './primario.component.html',
  styleUrls: ['./primario.component.css']
})
export class PrimarioComponent {
  // OUTPUT
  // Criar função para receber os dados e vincular na view do componente pai
  public recebendoDados(dadosRecebidos: any) {
    let receptora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.\n';
    receptora += ' O e-mail ' + dadosRecebidos.email + ' foi cadastrado com sucesso!';

    alert(receptora)

  }
}

/*
  // INPUT
  // Aqui, vamos definir os conjuntos de dados que serão enviados para o componente-filho (InputComponent)
  public texto: string = 'Este é o texto que será exibido no input.component.html';
  public outroTexto: string = 'Este é o texto que será exibido na janela de alerta!';
*/