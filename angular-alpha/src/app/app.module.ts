import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importando o módulo Forms
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PropertyBindingComponent } from './componentes/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { InputComponent } from './componentes/input/input.component';
import { PrimarioComponent } from './componentes/primario/primario.component';
import { OutputComponent } from './componentes/output/output.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    InputComponent,
    PrimarioComponent,
    OutputComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
