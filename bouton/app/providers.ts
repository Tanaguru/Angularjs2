import { APP_BASE_HREF } from '@angular/common';
import { baseUrl } from './app.routes';
export { NotificationService } from './notification.service';
import { NotificationService } from './notification.service';
export { ModalService } from './modal.service';
import { ModalService } from './modal.service';


export const providers = [
  { provide: APP_BASE_HREF, useValue: baseUrl },
  NotificationService,
  ModalService,
];