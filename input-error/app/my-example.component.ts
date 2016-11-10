import {Component} from '@angular/core';

@Component({
  selector: 'my-example',
  templateUrl: 'app/my-example.component.html'
})
export class MyExampleComponent {
  myModel: string;
  myCtrlInput: string;
  constructor(){
    this.myModel = '';
    this.myCtrlInput = '';
  }

  ctrlInput: boolean = false;

  toggleCtrlInput(value) {
  	if(this.myModel == '') {
  		this.ctrlInput = true;
  		this.myCtrlInput = 'ctrlInput';
  	} else {
  		this.ctrlInput = false;
  		this.myCtrlInput = null;
  	}
  }
}
