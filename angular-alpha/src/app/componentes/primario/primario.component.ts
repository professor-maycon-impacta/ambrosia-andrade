import { Component } from '@angular/core';

@Component({
  selector: 'app-primario',
  templateUrl: './primario.component.html',
  styleUrls: ['./primario.component.css']
})
export class PrimarioComponent{
 // criar função para receber os dados e vincular na view do componente-pai
 public recebendoDados(dadosRecebidos:any){
   let receptora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.' + '\n';
   receptora = receptora + ' O email ' + dadosRecebidos.email + ' foi cadastrado com sucesso!'

   alert(receptora)
 }
}


/*
  // aqui, vamos definir os conjuntos de dados que serão enviados para o componente-filho (input component)
  public texto: string = 'Este é o texto que será exibido no input.component.html'
  public outroTexto: string = 'Este é o texto que será exibido na janela de alerta!'*/
