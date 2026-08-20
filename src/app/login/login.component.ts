import {LoginService} from './../_service/login.service';
import {Router} from '@angular/router';
import {environment} from './../../environments/environment';
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as decode from 'jwt-decode';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent implements OnInit {

  hide = true;
  usuario: string;
  clave: string;
  url_registro: string;
  url_recuperarClave: string;

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {
    this.url_registro = environment.url_registro;
    this.url_recuperarClave = environment.url_recuperarClave;
  }

  ngOnInit() {

  }

  iniciarSesion() {
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      if (data) {
        const token = JSON.stringify(data); // CONVIERTO LA RESP JSON EN UN STRING
        const tk = JSON.parse(token);
        const decodedToken = decode(tk.access_token); // DECODIFICO EL access_token
        const rol = decodedToken.authorities[0];  // EXTRAIGO EL ROL
        if (rol === 'ADMIN') {
          document.location.href = environment.url_gestionComplejos + '?token=' + token;
        } else {
          document.location.href = environment.url_reservaCancha + '?token=' + token;
        }
        // document.location.href = environment.url_sejuegasgo + '?tipoDoc=' + this.tipoDocumento + '&numDoc=' + this.numDocumento;
        // this.router.navigate(['dashboard']);// Poner la url de la app de admin complejos
      }
    }, (err) => {
      if (err.status == 400 || err.status == 401 || err.status == 403) {// ERROR DE SEGURIDAD
        this.snackBar.open('Credenciales incorrectas', 'Aviso', {duration: 3000});
      } else {// ERROR DE CONEXION CON EL BACKEND
        this.snackBar.open('Error de conexión', 'Aviso', {duration: 3000});
      }
    });
  }
}
