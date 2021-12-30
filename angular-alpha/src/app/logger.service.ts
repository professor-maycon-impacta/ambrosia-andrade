import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
  // Criar a função para - após a injeção de dependência - ser acessada dentro de product.service
  testando(mensagem:any){
    console.log(mensagem);
  }
  
}
