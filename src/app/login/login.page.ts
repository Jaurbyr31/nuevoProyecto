import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  constructor(
    private router: Router
  ){}

  ngOnInit() {}
  
  /*Aca esta la funcoin para el ingreso a la paguina, 
  con las credenciales juan para instructor con su respectiva contraseña y juancho para coordinador con su respectiva contraseña*/
  login() {
    const validUsername1 = 'juan'; // Nombre de usuario válido
    const validPassword1 = '8'; // Contraseña válida
    const validUsername2 = 'juancho'; // Nombre de usuario válido
    const validPassword2 = '88'; // Contraseña válida

    if (this.username === validUsername1 && this.password === validPassword1) {
      this.router.navigate(['/home']);
    } else {
      if (this.username === validUsername2 && this.password === validPassword2) {
      this.router.navigate(['/home-coordinador']);
      } else {
        alert('Credenciales incorrectas intente nuevamente');
      }
    }
  }
}
