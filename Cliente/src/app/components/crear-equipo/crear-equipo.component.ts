import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { equipo } from 'src/app/models/equipo';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  equipoForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService) {
    this.equipoForm=this.fb.group({
      nombre:["", Validators.required]
    });
  }

  agregarEquipo() {
    const equipo : equipo = {
      nombre: this.equipoForm.get('nombre')?.value,
      puntos:0,
      difGol:0,
      golesFavor:0,
      golesContra:0
    };
    console.log(equipo);
    this.toastr.success('El equipo se registró correctamente', 'Equipo registrado');
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
