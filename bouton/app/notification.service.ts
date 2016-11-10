import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable()
export class NotificationService {
  notify(message: string) {
    this.modal.description = message;
    this.modal.open();
  }
  
  constructor(private modal: ModalService) {
    this.modal.title = 'Notification';
  }
}