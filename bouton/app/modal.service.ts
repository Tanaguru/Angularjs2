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
  }
  
  close() {
    this.visible = false;
  }
}