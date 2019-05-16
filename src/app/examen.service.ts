import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import {Person} from 'person.ts';
import { catchError, map, tap } from 'rxjs/operators';
import { Examen } from './examen';

import {RequestOptions, Request, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

	constructor(private http: HttpClient) { }

	private examenUrl = 'https://enigmatic-thicket-81682.herokuapp.com/api';  // URL to web api
  	
 
  	getExamenes (): Observable<Examen[]> {
      return this.http.get<Examen[]>(this.examenUrl+"/examen/all")    
  	}

    getExamenesPageable (page:number){
      return this.http.get(this.examenUrl+'/examen/all/?page='+page);

    }



    /**
     * obtenemos el examen por medio del id
     * @param  {number}              
     * @return {Observable<Examen[]>}
     */
    getExamenId (id : number): Observable<Examen> {
      return this.http.get<Examen>(this.examenUrl+"/examen/"+id)  

    }

    getProduct(id: number): Observable<Examen> {
      const url = this.examenUrl+"/examen/all";
      return this.http.get<Examen>(url).pipe(
    tap(_ => console.log(`fetched product id=${id}`))    
  );
}

    delete (id : number){
      this.http.delete(this.examenUrl+'/examen/delete/'+id)
      .subscribe(
        res => {
          console.log(res);          
          window.location.reload();
        }
      );  
    }

    update (examen: Examen){
      this.http.put(this.examenUrl+'/examen/update/'+examen.id, examen)
      .subscribe(
        res => {
          console.log(res);
          alert("Registro actualizado");
          window.location.href = "/examen";                
        },
        err => {
          console.log("Error occured");
        }
      );  
    }
  	res : number; 
  	add (examen: Examen) {
  	this.http.post(this.examenUrl+'/examen/add', examen)
      .subscribe(
        res => {
          console.log(res); 
          alert("Registro insertado"); 
          window.location.reload();   
         //  this.res=1;     
        },
        err => {
          console.log("Error occured");
        }
      );      
//      return this.res;

    }

    // add(x: number, y: number): number {
    //     return x + y;
    // }

    refresh(): void {
    window.location.reload();
  }

}
