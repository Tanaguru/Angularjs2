import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } '@angular/core';
import { MyExampleComponent } from './my-example.component.ts'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, 
    ReactiveFormsModule, 
    FormsModule],
  declarations: [MyExampleComponent],
  bootstrap: [MyExampleComponent]
})
export class MyAppModule {

}
