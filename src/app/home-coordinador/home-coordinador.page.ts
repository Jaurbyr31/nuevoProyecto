import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-coordinador',
  templateUrl: './home-coordinador.page.html',
  styleUrls: ['./home-coordinador.page.scss'],
})
export class HomeCoordinadorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  /* Aca estan los parametros para los botones de salida*/
  salirPagina(){ this.router.navigate(['/login']); }

  /* Aca estan los parametros para los botones que envian a la paguina donde se encuentra la lista de aprendices citados o por citar a comite*/
  CitarComite(){ this.router.navigate(['/lista-citados']); }
  
  /* Aca estan los parametros para los botones que envian a la paguina donde se encuentran los documentos con las listas de aprendices citados a comite*/
  Documentos(){ this.router.navigate(['/documentos']); }
}
