import { Component, OnInit } from '@angular/core';
//Activamos las rutas
//import { ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


import { ExamenService } from '../examen.service';
import { Examen} from '../examen';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-examenedit',
  templateUrl: './examenedit.component.html',
  styleUrls: ['./examenedit.component.css']
})
export class ExameneditComponent implements OnInit {
	
	examen = new Examen();
	id: number;
	tema: string;
	//model = new Observable<Examen>;


//activamos la ruta en el constructor
  //constructor(private router: Router, private route: ActivatedRoute, private examenService: ExamenService, private formBuilder: FormBuilder) {}
  constructor(private router: Router, private route: ActivatedRoute, private examenService: ExamenService) { }
//se obtiene el valor por url


  ngOnInit() {
  	this.getExamenId(this.route.snapshot.paramMap.get('id'));
  	
   }

   getExamenId(id) {
   	this.examenService.getExamenId(id).subscribe(data => {
   		//Mandamos los datos a la vista
   		this.tema = data.tema;
   		this.id = data.id;
   		
   	});
   	}

   	onSubmit(f: NgForm) {
	    console.log(f.value);  // { first: '', last: '' }
	    //console.log(f.id);  // false
  	}

   	updateExamen(examen: Examen): void {
       examen.id = this.id;
   		//console.log(id);
   		//console.log(examen.tema);
       
      //console.log(examen.id);
      this.examenService.update(examen);
    
   		// this.model.id = id;
   		// this.model.tema = miTema;
   		// if (this.model.tema!=null) {
   		// }
   		


   		//this.examenService.update(examen);    	
  	}

// onFormSubmit(form:NgForm) {
//   this.isLoadingResults = true;
//   this.examenService.update(this.id, form)
//   //this.api.updateProduct(this._id, form)
//     .subscribe(res => {
//         let id = res['_id'];
//         this.isLoadingResults = false;
//         this.router.navigate(['/product-details', id]);
//       }, (err) => {
//         console.log(err);
//         this.isLoadingResults = false;
//       }
//     );
// }

   // getExamenId(id:string):void{
   // 	  this.examenService.getExamenId(parseInt(id, 10))
   // 	  .subscribe(lista => lista = lista);
   //  }



    /*get(id:string):Examen {
   	  return new Examen;
    }*/
    //let myAdd = function(x: number, y: number): number { return x + y; };


}
