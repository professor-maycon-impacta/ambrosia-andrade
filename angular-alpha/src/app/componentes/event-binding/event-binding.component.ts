import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{
  // estabelecendo a função para o event-binding
  public exibirAlerta(): void{
    console.log('Evento disparado - leitura feita via terminal do browser')
    alert('Evento disparado. Dados vinculados.')
  }
}
