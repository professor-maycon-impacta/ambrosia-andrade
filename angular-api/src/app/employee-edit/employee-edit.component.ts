import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  // Primeira parte - Criar uma "cópia - tirar uma foto" da rota pela qual os dados circularão
  id = this.actRoute.snapshot.params['id'];
  dadosRegistros: any = {};

  // Segunda parte - instruir as referências de instância
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  // Terceira parte - Priorizando o carregamento do registro para edição
  ngOnInit(): void {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.dadosRegistros = data;
    })
  }

  // Quarta parte - Criar a função para acessar o método de atualização criado na REST API
  atualizarRegistro(){
    if(window.confirm('Tem certeza que deseja atualizar o registro?')){
      this.restApi.updateEmployee(this.id, this.dadosRegistros).subscribe((data: any) => this.router.navigate(['/employees-list']))
    }
  }
}
