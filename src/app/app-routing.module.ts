import { NgModule } from '@angular/core';
import { Routes, RouterModule , } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CarrelComponent } from './carrel/carrel.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PubblicazioneComponent } from './pubblicazione/pubblicazione.component';
import { AuthRedirectGuard } from './auth-redirect.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'carrel', component: CarrelComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthRedirectGuard] },
  { path: 'pubblicazione', component: PubblicazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
