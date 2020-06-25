import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from '@angular/material/icon';


import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepper,MatStepLabel,MatStepperModule,MatHorizontalStepper} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { PublicarOfertaComponent } from './components/publicar-oferta/publicar-oferta.component';
import { HomeComponent } from './components/home/home.component';


import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { 
  MatDatepickerModule,
} from '@angular/material/datepicker';


//MODEUL DE ANGULAR MTERIAL
import {MatTabsModule} from '@angular/material/tabs';
import { NavegacionComponent } from './components/navegacion/navegacion.component';


import  {MatNativeDateModule, } from "@angular/material/core";


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './_helpers/AuthInterceptor';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroCandidatosComponent } from './components/registro-candidatos/registro-candidatos.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ListarTrabajosComponent } from './components/listar-trabajos/listar-trabajos.component';

/* ORIGINAL */
//import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicarOfertaComponent,
    HomeComponent,
    NavegacionComponent,
    PerfilComponent,
    RegistroCandidatosComponent,
    MenuUserComponent,
    CategoriasComponent,
    ListarTrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatTabsModule,
    CKEditorModule,
    MatNativeDateModule
  
  ],
  providers: [
     {
    provide: HTTP_INTERCEPTORS,
   useClass: AuthInterceptor,
   multi: true
 },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
