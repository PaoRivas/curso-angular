import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,
  children: [
    {path: 'home1', component:Home1Component},
    {path: 'home2', component:Home2Component}
  ]},
  {path:'admin', component: AdminComponent},
  {path:'about', component: AboutComponent},
  {path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule2)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }