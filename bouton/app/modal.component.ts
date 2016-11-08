import { Component, Input, HostBinding, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'ngc2-modal',
  template: `
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description">
      <div id="modal-title">{{title}}</div>
      <p id="modal-description">{{description}}</p>
      <button type="button" id="close-button" (click)="close.emit()">OK</button>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      display: flex;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      justify-content: center;
      align-items: center;
    }
    
    div[role=dialog] {
      min-width: 300px;
      max-width: 600px;
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
    }
    
  `]
})
export class ModalComponent {
  @Input()
  title: string;
  
  @Input()
  description: string;
  
  @Input()
  visible = false;
  
  @Output()
  close = new EventEmitter<void>();
  
  displayStyle = {
    false: 'none',
    true: 'flex',
  };
  
  @HostBinding('style.display')
  get display() {
    return this.displayStyle[this.visible];
  }
  
  constructor(private modal: ModalService, private element: ElementRef) { }
  
  ngOnInit() {
    this.modal.visible$.subscribe(visible => {
      if(visible) {
        setTimeout(() => {
          this.element.nativeElement.querySelector('button').focus();
        }, 0);
      }
    })
  }

  @HostListener('keyup', ['$event'])
  keyboardInput(event: any) {
    if (event.keyCode == 27) {
      this.modal.close();
    }
  }
}
