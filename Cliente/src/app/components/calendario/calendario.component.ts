import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  listEquipos : Equipo[] = []
  partidosForm: FormGroup;

  constructor(private _equipoService: EquipoService, private fb:FormBuilder, private toastr: ToastrService) { 
    this.partidosForm=this.fb.group({
      golesLocal:["", Validators.required],
      golesVisitante:["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerEquipos()
  }

  obtenerEquipos(){
    this._equipoService.getEquipos().subscribe(data => {
      console.log(data)
      this.listEquipos = data
    }, error => {
      console.log(error)
    })
  }

  agregarPuntos(localId:number | undefined, visitanteId:number | undefined){
    let golesLocal = this.partidosForm.get('golesLocal')?.value
    let golesVisitante = this.partidosForm.get('golesVisitante')?.value
    var puntosLocal:number
    var puntosVisitante:number

    if(golesLocal==""){
      golesLocal=0;
    }
    if(golesVisitante==""){
      golesVisitante=0;
    }
    if(golesLocal>golesVisitante){
      puntosLocal=3
      puntosVisitante=0
    }
    else if(golesLocal<golesVisitante){
      puntosLocal=0
      puntosVisitante=3
    }
    else{
      puntosLocal=1
      puntosVisitante=1
    }

    var local:Equipo;
    this._equipoService.obtenerEquipo(localId).subscribe(data =>{
      local={
        "nombre":data.nombre,
        "puntos":data.puntos+puntosLocal,
        "difGol":data.difGol+golesLocal-golesVisitante,
        "golesFavor":data.golesFavor+golesLocal,
        "golesContra":data.golesContra+golesVisitante
      }
      this._equipoService.editarEquipo(localId, local).subscribe(data=>{
        this.toastr.info("Equipo local actualizado", "Modificaciones hechas")
      })
    });
    
    var visitante:Equipo;
    this._equipoService.obtenerEquipo(visitanteId).subscribe(data =>{
      visitante={
        "nombre":data.nombre,
        "puntos":data.puntos+puntosVisitante,
        "difGol":data.difGol+golesVisitante-golesLocal,
        "golesFavor":data.golesFavor+golesVisitante,
        "golesContra":data.golesContra+golesLocal
      }
      this._equipoService.editarEquipo(visitanteId, visitante).subscribe(data=>{
        this.toastr.info("Equipo visitante actualizado", "Modificaciones hechas")
      })
    });
  }

}
