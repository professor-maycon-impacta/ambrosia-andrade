import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  // Primeira parte - Criar a propriedade para ser a coleção iteravel de dados
  listaColaboradores: any = [];

  // Segunda parte - Referência de instância da REST API
  constructor(
    public restApi: RestApiService
  ) { }

  // Terceira parte - Priorizando o carregamento da lista de colaboradores
  ngOnInit(): void {
    this.loadEmployees();
  }

  // Quarta parte - Acessando os dados da base para criar a lista
  loadEmployees(){
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.listaColaboradores = data;
    })
  }

  // Quinta parte - Função para acessar a REST API e excluir um registro
  excluirColaborador(id: any){
    if(window.confirm('Tem certeza que deseja excluir o registro?')){
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      })
    }
  }

}
