import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PropertyBindingComponent } from './componentes/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { PrimarioComponent } from './componentes/primario/primario.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { CompDirComponent } from './componentes/comp-dir/comp-dir.component';
import { CompServiceComponent } from './componentes/comp-service/comp-service.component';

const routes: Routes = [
  {path:'interpolation', component:InterpolationComponent},
  {path:'propbinding', component:PropertyBindingComponent},
  {path:'event', component:EventBindingComponent},
  {path:'two-way', component:TwoWayComponent},
  {path:'primario', component:PrimarioComponent},
  {path:'ng-if', component:NgIfComponent},
  {path:'ng-for', component:NgForComponent},
  {path:'ng-class', component:NgClassComponent},
  {path:'ng-style', component:NgStyleComponent},
  {path:'comp-dir', component:CompDirComponent},
  {path:'comp-service', component:CompServiceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
