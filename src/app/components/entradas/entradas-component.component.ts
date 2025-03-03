import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginServiceService} from '../../services/login-service.service';
import {Token} from '@angular/compiler';

@Component({
  selector: 'app-entradas-component',
  standalone: false,
  templateUrl: './entradas-component.component.html',
  styleUrl: './entradas-component.component.css'
})
export class EntradasComponentComponent {
  tokenUser: string | null = null;
  enviarToken: boolean = false;
  enviarToken2: boolean = false;

  resultado: string = '';
  eventName: string | null = null;

  mostrarEntradas(): void {
    this.enviarToken = true;
    this.enviarToken2 = false;
  }

  sendToken(): void {
    if (this.tokenUser) {
      const trimmedToken = this.tokenUser;
      this.loginService.sendToken(trimmedToken).subscribe({
        next: response => {
          console.log('success', response);
          this.resultado = response.toString();
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
      })
    }
  }

  constructor(private loginService: LoginServiceService) {
  }
}
