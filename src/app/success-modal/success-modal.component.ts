import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit, AfterViewInit {
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
