import {Component, forwardRef} from 'angular2/core';
import {ToggleComponent} from './toggle.component';

@Component({
 selector: 'my-app',
 templateUrl: './src/app.template.html'
 directives: [ToggleComponent]
})

export class AppComponent {}