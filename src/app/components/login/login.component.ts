import {Component} from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  token: string | null = null;
  tokenUser: string = '';
  mostrarBoton: boolean = false;
  mostrarBoton2: boolean = false;


  onLogin(): void {
    if (this.username && this.password) {
      this.loginService.sendBody(this.username, this.password).subscribe({
        next: (response) => {
          console.log('Login success', response);
          if (response && response.token) {
            this.token = response.token;
            this.mostrarBoton = true;
            console.log("Token recibido: ", this.token)

          } else {
            console.error("Token no encontrado.");
            alert("Error: Token no encontrado.")
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login failed', error);

          if (error.status === 401) {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
          } else if (error.status === 400) {
            alert("Error en la solicitud. Revise sus datos.");
          } else {
            alert("Ha ocurrido un error. Por favor, inténtalo más tarde.");
          }
        }
      });
    } else {
      console.error('Username or password is empty');
      alert("Por favor, complete todos los campos.");
    }
  }

  sendToken(): void {
    if (this.token == this.tokenUser) {
      this.mostrarBoton2 = true;
      this.mostrarBoton = false;
    } else {
      alert("Token incorrecto, vuelve a logearte.")
    }
  }

  constructor(private loginService: LoginServiceService) {
  }
}
