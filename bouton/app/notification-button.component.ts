import { Component, Input, HostListener } from '@angular/core';
import { NotificationService } from './providers';

@Component({
  selector: 'ngc2-notification-button',
  template: `
    <span>{{label}}</span>
  `,
  styles: [`
    :host {
      display: flex;
      width: 80px;
      height: 80px;
      justify-content: center;
      align-items: center;
      background-color: yellow;
      border-radius: 40px;
    }
    
    :host:hover {
      cursor: pointer;
    }
  `]
})
export class NotificationButtonComponent {
  @Input()
  message = 'Alert!';
  
  @Input()
  label = 'Notify';
  
  constructor(private notification: NotificationService) { }
  
  @HostListener('click', [])
  notify() {
    this.notification.notify(this.message)
  }
  @HostListener('keyup', ['$event'])
  keyboardInput(event: any) {
    if (event.keyCode == 32 || event.keyCode == 13) {
      this.notification.notify(this.message)
    }
  }
}
