import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {SignupServiceService} from '../../services/signupService/signup-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onRegister(): void {
    if (this.username && this.email && this.password) {
      this.signupService.sendBody(this.username, this.email, this.password).subscribe({
        next: (response) => {
          console.log('Signup success', response);
          alert("Registro exitoso!")
        },
        error: (error: HttpErrorResponse) => {
          console.error('Signup failed', error);

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
      console.error('Algo esta vacío');
      alert("Por favor, complete todos los campos.");
    }
  }

  constructor(private signupService : SignupServiceService) {
  }

}
