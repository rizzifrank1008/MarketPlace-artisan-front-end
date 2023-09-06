import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  private modalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) {}

  // Restituisce l'osservabile per lo stato di autenticazione
  public checkAuthentication() {
    return this.authenticatedSubject.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.authenticatedSubject.next(value);
  }

  isAuthenticated(): boolean {
    return this.authenticatedSubject.value;
  }

  logout(): void {
    if (this.authenticatedSubject.value) {
      // Se l'utente è autenticato, mostra il modale di logout
      this.modalRef = this.modalService.show(LogoutModalComponent, {
        initialState: {
          message: 'Hai effettuato il logout con successo'
        }
      });
    }

    // Reimposta l'autenticazione
    this.setAuthenticated(false);
  }
}
