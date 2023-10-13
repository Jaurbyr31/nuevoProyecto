import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  
  users: any = [];


  constructor( private http: HttpClient, private router: Router){this.getUser();}

  ngOnInit() {}

  getUser() {
    this.http.get('http://localhost/iumecobd/user.php').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener datos del servidor:', error);
      }
    );
  }

  
  
  /*Aca esta la funcoin para el ingreso a la paguina, 
  con las credenciales juan para instructor con su respectiva contraseña y juancho para coordinador con su respectiva contraseña*/
  login() {
    // Obtener las credenciales ingresadas por el usuario
    const inputUsername = this.username;
    const inputPassword = this.password;
  
    // Buscar si las credenciales coinciden con algún usuario en this.users
    const user = this.users.find((u: any) => u.user === inputUsername && u.contra === inputPassword);
  
    if (user) {
      // Las credenciales son correctas, verificar el valor del campo "cargo"
      if (user.cargo === 'instructor') {
        // Usuario instructor
        this.router.navigate(['/home']);
      } else if (user.cargo === 'coordinador') {
        // Usuario coordinador
        this.router.navigate(['/home-coordinador']);
      } else {
        // Cargo desconocido
        alert('Credenciales incorrectas, intente nuevamente');
      }
    } else {
      // Las credenciales son incorrectas
      alert('Credenciales incorrectas, intente nuevamente');
    }
  }
  
}
