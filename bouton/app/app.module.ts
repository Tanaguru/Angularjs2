import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { declarations } from './components';
import { providers } from './providers';

@NgModule({
  imports: [BrowserModule],
  declarations,
  bootstrap: [AppComponent],
  providers,
})
export class AppModule {

}
