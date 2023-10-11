import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-citados',
  templateUrl: './lista-citados.page.html',
  styleUrls: ['./lista-citados.page.scss'],
})
export class ListaCitadosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { }

  /* Aca estan los parametros para los botones de salida y paguina anterior de la paguina*/
  salirPagina(){ this.router.navigate(['/login']); }
  volver(){ this.router.navigate(['/home-coordinador']); }

}
