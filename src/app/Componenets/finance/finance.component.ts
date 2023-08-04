
import { Component } from '@angular/core';
import { Consultation } from 'src/app/Models/Consultation';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
 // currentDate: Date = new Date();
 montant:number=new Date().getMonth()-1


  dateDeb:string;
  dateFin:string=new Date().toISOString().slice(0, 10);
consultation:Consultation[]
constructor(private http:HttpService){
  const today = new Date();
    today.setMonth(today.getMonth() - 1);
    this.dateDeb = today.toISOString().slice(0, 10);

   
} 
ngOnInit(){
  this.dateDebHandle();
}

public dateDebHandle(){
  
  console.log(this.dateDeb)
 // const dateObj: Date = new Date(this.dateFin);
  this.http.getAllConsultationByDate(new Date(this.dateDeb).toISOString().slice(0, 10),this.dateFin,this.http.md.nom_cabinet).subscribe((result: Consultation[])=>{
        this.consultation=result
        this.montant=0
        for(let consult of this.consultation){
          this.montant+=consult.prix;
        }
console.log(this.consultation)
console.log(this.montant)
console.log(this.dateDeb)
              });
           
              for(let consult of this.consultation){
                this.montant=this.montant+consult.prix;
              }
             
}

public datefinHandle(){
  this.dateDebHandle();          
}

public deleteConsultation(num:Number){
  console.log('ja ts1 delete');
this.http.deleteConsultation(num).subscribe(res=>{
console.log(res);
  this.dateDebHandle();
})


}

}
