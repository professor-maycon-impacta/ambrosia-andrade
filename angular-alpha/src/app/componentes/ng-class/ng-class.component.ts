import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent{
    // primeira propriedade de ngClass
    cssAlteradoViaVar: string = 'color size'
    objNgClass: UmaClasseCss = new UmaClasseCss()
  }

  //classe para ser vinculada com a diretiva ngClass
  class UmaClasseCss{
    color: boolean = true
    size: boolean = true
  }
