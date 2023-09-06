import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {
  message: string = '';

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Chiudi il modale dopo 3 secondi (3000 millisecondi)
    setTimeout(() => {
      this.closeModal();
    }, 2000);
  }

  closeModal(): void {
    this.modalRef.hide();
  }
}
