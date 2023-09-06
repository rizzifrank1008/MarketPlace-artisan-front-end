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

  closeModal(): void {
    this.modalRef.hide();
  }
}
