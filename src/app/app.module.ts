import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './componentes/persona.module';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
