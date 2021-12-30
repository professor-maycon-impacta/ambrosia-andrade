import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent{
  // criar a propriedade subtitulo para vincular na view
  subtitulo: string = '5 filmes sensacionais!'

  // criando o conjunto de dados
  filmes: Filme[] = [
    {titulo:'O poderoso Chefão',direcao:'Francis Ford Coppola',elenco:'Marlon Brando, Al Pacino, James Caan',anoLancamento:'10 de setembro, 1972'}, 
    {titulo:'Um Estranho no Ninho',direcao:'Milos Forman',elenco:'Jack Nicholson, Louise Fletcher, Michael Berryman ',anoLancamento:'26 de maio, 1976'},
    {titulo:'A lista de Schindler',direcao:'Steven Spielberg',elenco:'Liam Neeson, Ralph Fiennes, Ben Kingsley',anoLancamento:'11 de março, 1993'},
    {titulo:'Forrest Gump - O contador de histórias',direcao:'Robert Zemeckis',elenco:'Tom Hanks, Robin Wright, Gary Sinise',anoLancamento:'7 de dezembro, 1994'},
    {titulo:'Laranja Mecânica',direcao:'Stanley Kubrik',elenco:'Malcolm McDowell, Patrick Magee, Michael Bates ',anoLancamento:'04 de setembro, 1971'},
  ]
}

// criar uma nova classe para ser nosso model domain
// classe que servirá para adequar o formato do dataset
class Filme{
  titulo!: string
  direcao!: string
  elenco!: string
  anoLancamento!: string
}
