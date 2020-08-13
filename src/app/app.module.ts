import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './personamodule/persona.module';
import { ProductoModule } from './productomodule/producto.module';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
