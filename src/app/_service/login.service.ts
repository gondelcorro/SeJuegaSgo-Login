import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt'; // npm install @auth0/angular-jwt

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // O lo instancio manualmente o lo uso como injeccion en el constructor y lo agrego en el AppModule como JwtModule
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
  }

  login(usuario: string, clave: string) {
    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(clave)}`;
    return this.http.post(environment.url_oauth_spring, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret))
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    const token = sessionStorage.getItem(environment.token_name);
    return token != null;
  }

  public isTokenExpired(): boolean {
    const token = sessionStorage.getItem(environment.token_name);
    return !this.jwtHelper.isTokenExpired(token);
  }
}
