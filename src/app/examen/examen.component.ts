import { Component, OnInit, Input } from '@angular/core';
import { ExamenService } from '../examen.service';
import { Examen} from '../examen';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
	//Modelo de la persona que se utiliza en el formulario
	//examenes : Examen[];
  tema: string;

  private page:number =0;
  private examens = Array<any>();
  private pages: Array<number>;

	model = new Examen();
	constructor(private examenService: ExamenService) {

  this.tema = ""; }

    setPage(i, event:any){
      event.preventDefault();
      this.page = i;
      this.getExamenesPageable();

    }
  	ngOnInit() {
  		this.getExamenesPageable();
  	}

    // getExamenes(): void {
    //   this.examenService.getExamenes()
    //   .subscribe(examenes => this.examenes = examenes);
    // }

    getExamenesPageable() {
      this.examenService.getExamenesPageable(this.page).subscribe(
          data=>{
           // console.log(data);
            this.examens = data['content'];
            this.pages= new Array(data['totalPages']);
          },
          (error)=>{
            console.log(error.error.message);
          }

        );
     
    }


    deleteExamen(examen : Examen): void{
      this.examenService.delete(examen.id);
    }

    res : number;
    addExamen(examen: Examen): void {
    	this.examenService.add(examen);    
      
    }
    var : Boolean;
    getId(examen: Examen){
      if (examen.id ==null || examen.id == undefined) {
        alert("Debe digitar al menos un número");
        //examen.id = null;
      }else{
        this.examenService.getExamenId(examen.id).subscribe(
          data=>{
           // console.log(data);
            // this.model.id = data["idExamen"];
            this.tema = data["tema"];
            this.var = true;
            //console.log(this.model.tema);
          },
          (error)=>{
            console.log(error.error.message);
          }


          );
      }
      }
    }
