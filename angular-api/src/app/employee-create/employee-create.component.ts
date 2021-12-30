import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  
  // Primeira parte - criar a propriedade que receberá o conjunto de dados
  @Input() employeeDetails = {
    name: '',
    email: '',
    phone: ''
  }

  // Segunda parte - definindo as referências de instância
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  // Terceira parte - criar a função para acessar o método da REST API para criar o registro na base de dados
    addEmployee(){
      this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
        this.router.navigate(['/list-employee'])
      })
    }

}
