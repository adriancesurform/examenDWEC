import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {EntradasComponentComponent} from './components/entradas/entradas-component.component';

const routes: Routes = [
  { path: 'registro', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'entradas', component: EntradasComponentComponent },

  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
