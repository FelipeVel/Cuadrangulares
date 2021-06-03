import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posicionar-equipos',
  templateUrl: './posicionar-equipos.component.html',
  styleUrls: ['./posicionar-equipos.component.css']
})
export class PosicionarEquiposComponent implements OnInit {

  listEquipos: Equipo[] =[];

  constructor(private _equipoService: EquipoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEquipos()
  }

  obtenerEquipos(){
    this._equipoService.getEquipos().subscribe(data => {
      console.log(data)
      this.listEquipos = data
      this.listEquipos.sort(function(a,b){
        if(a.puntos<b.puntos){
          return 1;
        }
        if(a.puntos>b.puntos){
          return -1;
        }
        return 0;
      })
    }, error => {
      console.log(error)
    })
  }

  eliminarEquipo(id:any){
    this._equipoService.eliminarEquipo(id).subscribe(()=>{
      this.toastr.error("Equipo eliminado", "Hecho")
      this.obtenerEquipos()
    },error=>{
      console.log(error);      
    })
  }

}
