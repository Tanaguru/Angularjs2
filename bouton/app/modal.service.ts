import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ModalService {
  title = 'Modal Title'
  description = 'Modal Description'
  private _visible = false;
  
  get visible() {
    return this._visible;
  }
  
  set visible(visible) {
    if(this._visible !== visible) {
      this.visible$.next(visible);
    }
    
    this._visible = visible;
  }
  
  visible$ = new BehaviorSubject();
  
  open() {
    this.visible = true;
    var el = document.getElementById('ngc2-notification-button');
    el.setAttribute("tabindex", "-1");
  }
  
  close() {
    this.visible = false;
    var el = document.getElementById('ngc2-notification-button');
    el.setAttribute("tabindex", "0");
    el.focus();
  }
}
