import {Component} from '@angular/core';

@Component({
  selector: 'my-example',
  templateUrl: 'app/my-example.component.html'
})
export class MyExampleComponent {
  myModel: any;
  constructor(){
    this.myModel = '';
  }

  ctrlInput: boolean = false;

  toggleCtrlInput(value) {
  	if(this.myModel == '') {
  		this.ctrlInput = true;
  	} else {
  		this.ctrlInput = false;
  	}
  }
}