import {Component, ElementRef} from 'angular2/core';

@Component({
 selector: 'toggle',
 templateUrl: './src/toggle.template.html'
})

export class ToggleComponent {
  active: boolean = false;
  targetId: string;

  constructor(elm: ElementRef) {
    this.targetId = elm.nativeElement.getAttribute('target'); 
    let target = document.getElementById(this.targetId);
    target.setAttribute('class', target.getAttribute('class') + ' expanded-false');
  }

  toggleBlock() {
    let target = document.getElementById(this.targetId);
    target.setAttribute('class', 'block expanded-' + (this.active ? 'false' : 'true') );
    this.active = !this.active;
  } 
}