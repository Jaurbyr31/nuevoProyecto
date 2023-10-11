import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felicitar-aprendiz',
  templateUrl: './felicitar-aprendiz.page.html',
  styleUrls: ['./felicitar-aprendiz.page.scss'],
})
export class FelicitarAprendizPage implements OnInit {

  constructor(private router: Router){ this.obtenerFichasUnicas(); }

  destinatario: string = '';
  destinatarios: { nombre: string, email: string }[] = [];

  fichasUnicas: number[] = [];
  fichaSeleccionada: number | null = null;

  fechaActual = new Date();
  dia = this.fechaActual.getDate();
  mes = this.fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  anio = this.fechaActual.getFullYear();
  fechaFormateada = `${this.dia}/${this.mes}/${this.anio}`;

  asunto = 'Felicitación al aprendiz';

  nota: string = '';
  get cuerpo(): string { return `

  -------------------------------------------------
  ${this.fechaFormateada}

  Bogotá,
  Señor ${this.newNombre}
  ${this.newEmail}
  ${this.newCargo}
  Gestión de Redes de Datos
  Bogotá
  Asunto: ${this.asunto}

  Respetado Señor ${this.newNombre},

  Le informo que en la reunión del Comité de Evaluación y Seguimiento según consta en el Acta No 6 del 15 de junio de 2022, se recomienda felicitarlo por su excelente desempeño académico y actitudinal reflejado en compromiso, responsabilidad y colaboración.

  Sea esta la oportunidad para invitarlo a continuar con ese entusiasmo en el desarrollo de su formación profesional.

  Cordialmente,
  Jaime García Di - Motoli
  Subdirector
  Proyecto: Tatiana Díaz
  Cargo: Apoyo Administrativo Coordinación Académica
  Revisó: Gustavo Beltrán Macías
  Cargo: Coordinador Académico
  VB: Lorena Salas
  Cargo: Abogada Despacho Subdirector
  Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información
  Calle 52 No. 13-65, Bogotá D.C. - PBX 57 601 5461500

  Nota: ${this.nota}
  `};

  ngOnInit(){}

  /* Aca estan los parametros para los botones de salida y paguina anterior de la paguina*/
  salirPagina(){ this.router.navigate(['/login']); }
  volver(){ this.router.navigate(['/home']); }

  /* Aca se prueba la funcionalidad del formulario*/
  enviarCorreo() {
    if (this.newId >= 1){
      const mensajeCodificado = encodeURIComponent(this.cuerpo);
      const mailtoLink = `mailto:${this.destinatario}?subject=${this.asunto}&body=${mensajeCodificado}&attachment=${''}`;
      window.location.href = mailtoLink;
    }else{ alert('Porfavor seleccionar un aprendiz')}
  };

  /* Aca se propone un arreglo para el uso de usuarios dispoibles en el formulario*/
  usuarios: any[] = [
    { id: 1, nombre: 'Usuario 1', email: 'UsuarioPrueba1@gmail.com', ficha: 2503816, cargo: 'Aprendiz',  asignatura: '' },
    { id: 2, nombre: 'Usuario 2', email: 'UsuarioPrueba2@gmail.com', ficha: 2503816, cargo: 'Aprendiz',  asignatura: '' },
    { id: 3, nombre: 'Usuario 3', email: 'UsuarioPrueba3@gmail.com', ficha: 2503815, cargo: 'Aprendiz',  asignatura: '' },
    { id: 4, nombre: 'Usuario 4', email: 'UsuarioPrueba4@gmail.com', ficha: 2503815, cargo: 'Aprendiz',  asignatura: '' },
    { id: 5, nombre: 'Usuario 5', email: 'UsuarioPrueba5@gmail.com', ficha: 2503815, cargo: 'Estudiante',  asignatura: '' },
  ];

  newId: number= 0;
  newNombre: string = '';
  newEmail: string = '';
  newCargo: string = '';

  obtenerFichasUnicas() {
    this.fichasUnicas = [...new Set(this.usuarios.map(usuario => usuario.ficha))];
    // this.destinatario = this.destinatarios.map(destinatario => destinatario.email);
  };

  filtrarDestinatarios() {
    if (this.fichaSeleccionada !== null) {
      this.destinatarios = this.usuarios
        .filter(usuario => usuario.ficha === this.fichaSeleccionada)
        .map(usuario => ({ nombre: usuario.nombre, email: usuario.email }));
    } else {
      this.destinatarios = [];
    }
  };

  informacionAprendiz() {
    if (this.destinatario.trim() !== '') { const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === this.destinatario);
  
      this.newId = usuarioEncontrado.id;
      this.newNombre = usuarioEncontrado.nombre;
      this.newEmail = usuarioEncontrado.email;
      this.newCargo = usuarioEncontrado.cargo;
      
    } else {      
      this.newId = 0;
      this.newNombre = 'Sin nombre';
      this.newEmail = 'Sin email';
      this.newCargo = 'Sin cargo';
    }
  };

}
