import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PosicionarEquiposComponent } from './components/posicionar-equipos/posicionar-equipos.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    PosicionarEquiposComponent,
    CrearEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
