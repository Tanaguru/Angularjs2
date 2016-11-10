import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'ngc2-app',
	template: `
	  <ngc2-notification-button 
	    message="Hello!"
	    id="ngc2-notification-button"
	    label="Greeting"
	    role="button"
	    tabindex="0">
	  </ngc2-notification-button>
	  <ngc2-modal
	    [title]="modal.title"
	    [description]="modal.description"
	    [visible]="modal.visible"
	    (close)="modal.close()">
	  </ngc2-modal>
	`
})
export class AppComponent {
  constructor(private modal: ModalService) { }
}
