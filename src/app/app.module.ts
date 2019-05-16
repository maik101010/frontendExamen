import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
  Importamos para los input de los formularios
 */
import { FormsModule } from '@angular/forms';
/*
  Importamos para las peticiones http
 */
 import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamenComponent } from './examen/examen.component';
import { ExameneditComponent } from './examenedit/examenedit.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    ExameneditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Agregamos el import    
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
