import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';

//componentes
import {CrearEquipoComponent} from './components/crear-equipo/crear-equipo.component';
import {PosicionarEquiposComponent} from './components/posicionar-equipos/posicionar-equipos.component';

const routes: Routes = [
  {path: 'crear', component: CrearEquipoComponent},
  {path: '', component: PosicionarEquiposComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'calendario/:id', component: CalendarioComponent},
  
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
