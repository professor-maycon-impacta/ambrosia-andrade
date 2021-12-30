import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent{
  // criar uma propriedade para ser vinculada via two way binding
  public nome: string = ''
}
