import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}  from './components/home/home.component'

import {LoginComponent} from './components/login/login.component'
import {PublicarOfertaComponent} from  './components/publicar-oferta/publicar-oferta.component'
const routes: Routes = [

  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'publicar-oferta', component: PublicarOfertaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
