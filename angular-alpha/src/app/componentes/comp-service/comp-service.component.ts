import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Produto } from '../../product';

@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
  
})
export class CompServiceComponent{
  // casting de propriedades
  listaProd!:Produto[] 

 // aqui, fizemos a instaciação do service
  constructor(private objProd: ProductService){ }
// criar uma função - para fazer o binding com a view
obterConteudo(){
  this.listaProd = this.objProd.getProdutos()
}

}
