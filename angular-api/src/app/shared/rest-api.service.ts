import { Injectable } from '@angular/core';

// Importando os recursos necessários
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from "../shared/employee";
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class RestApiService {

  // Definindo o caminho para a base de dados
  apiURL = 'http://localhost:3000';

  // Definindo a referência de instância do recurso HttpClient
  constructor( private http: HttpClient ) { }

  // Credenciais de acesso ao back-end domain para modificá-lo
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*
    ============================================================
            CONSTRUINDO A API E SEUS RESPECTIVOS MÉTODOS
    ============================================================
  */

  // Aqui, estamos recuperando o conjunto de dados para a criação de uma lista de exibição
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Recuperar um único registro da base de dados
  getEmployee(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Método para inserir dados em nossa base employees
  createEmployee(employee: any): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Método para atualizar a base de dados
  updateEmployee(id: any, employee: any): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Método de exclusão de registro
  deleteEmployee(id: any) {
    return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Função para tratamento de erros da aplicação - erro no front ou no back
  handleError(error: any){
    // Criar uma propriedade para receber uma mensagem em relação ao erro ocorrido
    let errorMessage = '';
    // Verificando onde - em qual parte da aplicação o erro ocorreu
    if (error.error instanceof ErrorEvent){
      // Tratando o erro - na parte front-end
      errorMessage = error.error.message;
    } else {
      // Tratando o erro - ocorrido na parte back-end
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`
    }
    window.alert(errorMessage);
    return throwError(() => new Error (errorMessage));
  }

}
