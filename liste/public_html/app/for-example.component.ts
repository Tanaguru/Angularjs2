import {Component, Input} from '@angular/core';

@Component({
  selector: 'for-example',
  template: `
    <div tabindex="-1" id="{{component.id}}">
      <ng-content></ng-content>
      directed by {{component.director}}
    </div>
  `
})
export class ForExampleComponent {
  @Input() component: number;
}
