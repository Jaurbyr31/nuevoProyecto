import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /* Aca estan los parametros para los botones de salida y paguina anterior de la paguina actual*/
  salirPagina(){ this.router.navigate(['/login']); }
  volver(){ this.router.navigate(['/home-coordinador']); }

}
