import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <for-example *ngFor="let component of components" [component]="component">
      {{component.title}}
    </for-example>
    <button (click)="addComponent()">Click me!</button>
  `
})
export class AppComponent {
    
  index;
  nbComponentShow;
  nbComponents;
  componentsInit: any[] = [
    { title: '1Winter Is Coming', director: 'Tim Van Patten' },
    { title: '2The Kingsroad', director: 'Tim Van Patten' },
    { title: '3Lord Snow', director: 'Brian Kirk' },
    { title: '4Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: '5The Wolf and the Lion', director: 'Brian Kirk' },
    { title: '6A Golden Crown', director: 'Daniel Minahan' },
    { title: '7Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: '8The Wolf and the Lion', director: 'Brian Kirk' },
    { title: '9A Golden Crown', director: 'Daniel Minahan' },
    { title: '10Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: '11The Wolf and the Lion', director: 'Brian Kirk' },
    { title: '12A Golden Crown', director: 'Daniel Minahan' },
    { title: '13Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: '14The Wolf and the Lion', director: 'Brian Kirk' },
    { title: '15A Golden Crown', director: 'Daniel Minahan' },
    { title: '16You Win or You Die', director: 'Daniel Minahan' },
    { title: '17The Pointy End', director: 'Daniel Minahan' }
  ];
  components: any[];
  
  constructor() {
  
    this.index = 0;  
    this.nbComponentShow = 5; 
    this.components = [];         
    this.nbComponents = this.componentsInit.length;
    
    
    
    this.addComponent();  
    
  }  
  
  addComponent() {
      
    var i = 0;
    var index = this.index * this.nbComponentShow
    var iMax = this.index * this.nbComponentShow + this.nbComponentShow;
    this.index++;
    if(iMax > this.nbComponents)
    {
      iMax = this.nbComponents;
    }
    
    while(i < iMax) {

      this.componentsInit[i].id = "focus" + i;    
        
      this.components[i] = this.componentsInit[i]);
   
      i++;
    }
    
    console.log('focus' + (index-1));
    if(document.getElementById('focus' + (index-1))) {
       console.log(document.getElementById('focus' + (index-1) ));
       document.getElementById('focus' + (index-1) ).focus(); 
    }
    
  }
  
  
}