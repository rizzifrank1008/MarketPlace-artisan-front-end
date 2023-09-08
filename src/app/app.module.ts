import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { FooterComponent } from './footer/footer.component';
import { CarrelComponent } from './carrel/carrel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RegistrationService } from './registration.service';
import { LoginComponent } from './login/login.component';
import { PubblicazioneComponent } from './pubblicazione/pubblicazione.component';
import { PubblicazoneService } from './pubblicazone.service';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './auth.service';
import { LogoutModalComponent } from './logout-modal/logout-modal.component'; // Assicurati che il percorso sia corretto
import { CookieModule } from 'ngx-cookie';
import { AuthRedirectGuard } from './auth-redirect.guard';
import { ImageUploadService } from './image-upload.service';
import { ProdottoService } from './prodotto.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdottiComponent,
    FooterComponent,
    CarrelComponent,
    RegistrationComponent,
    LoginComponent,
    PubblicazioneComponent,
    SuccessModalComponent,
    LogoutModalComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CookieModule.forRoot(),
    
   
    
  ],
  
  providers: [RegistrationService,PubblicazoneService,ImageUploadService,AuthService,AuthRedirectGuard ,ProdottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
