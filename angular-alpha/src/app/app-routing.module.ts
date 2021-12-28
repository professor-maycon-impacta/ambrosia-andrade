import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PropertyBindingComponent } from './componentes/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { PrimarioComponent } from './componentes/primario/primario.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';

const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propbinding', component: PropertyBindingComponent},
  {path: 'event', component: EventBindingComponent},
  {path: 'two-way', component: TwoWayComponent},
  {path: 'primario', component: PrimarioComponent},
  {path: 'ng-if', component: NgIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
