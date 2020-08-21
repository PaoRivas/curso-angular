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
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective,
    AboutComponent,
    HomeComponent,
    AdminComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
