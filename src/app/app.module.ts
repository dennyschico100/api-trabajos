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



import { 
  MatDatepickerModule,
} from '@angular/material/datepicker';


//MODEUL DE ANGULAR MTERIAL
import {MatTabsModule} from '@angular/material/tabs';



/* ORIGINAL */
//import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicarOfertaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
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

  
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
