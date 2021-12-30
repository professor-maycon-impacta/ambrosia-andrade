import { Injectable } from '@angular/core';
// importando o model para que o service faça uso
import { Produto } from './product';
import { LoggerService } from './logger.service';

@Injectable()

export class ProductService {
  constructor(private verificacao: LoggerService) { 
    this.verificacao.testando('ProductService foi construído!');
  }

  // criando a função 
  public getProdutos(){
    this.verificacao.testando('Método/Função getProdutos() foi chamado');
    // estabelecer a propriedade para criar a coleção de dados
    let produtos: Produto[]

    // criação do conjunto de dados - lista de produtos
    produtos = [
      new Produto(1, 'Quadro Baby Yoda', 199),
      new Produto(2, 'Mascara Darth Vader', 159),
      new Produto(3, 'LightSaber', 89)
    ]
    this.verificacao.testando(produtos);
    return produtos
  }
}
