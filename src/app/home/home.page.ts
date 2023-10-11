import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listaAsuntos: string[] = ['Llamado de atención', 'Citación a Comite', 'Felicitar al aprendiz'];

  constructor(private router: Router) {  
  }

  ngOnInit() { }

  /* Aca estan los parametros para los botones de navegacion hacia los formularios que envian los correos*/
  salirPagina(){ this.router.navigate(['/login']); }
  felicitarAprendiz() { this.router.navigate(['felicitar-aprendiz']); }
  llamadoAtencion() { this.router.navigate(['/llamado-atencion']); }
  citacionComite() { this.router.navigate(['/citacion-comite']); }
  
}
