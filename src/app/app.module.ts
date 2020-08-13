import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './personamodule/persona.module';
import { ProductoModule } from './productomodule/producto.module';
import { AdminModule } from './adminmodule/admin.module';
import { UserModule } from './usermodule/user.module';
import { TestPipe } from './pipes/test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
