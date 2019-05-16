import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenComponent } from './examen/examen.component';
import { ExameneditComponent } from './examenedit/examenedit.component';

/**
 * Rutas de la aplicación
 * @type {Routes}
 */
const routes: Routes = [
  { path: 'examen', component: ExamenComponent },
  { path: 'examen/update/:id', component: ExameneditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
