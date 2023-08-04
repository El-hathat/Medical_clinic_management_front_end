import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/Models/Medecin';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  listofpat :Medecin[];
  secs :Medecin[];

  constructor(private httpservice: HttpService){

    

          
  }
getpat(){
  this.httpservice.fetchAll().subscribe((result: Medecin[])=>{
        
    this.listofpat=result;
    this.secs=[];
    console.log(this.listofpat);


    this.listofpat.forEach((eleme)=>{
      if(eleme.nom_cabinet==this.httpservice.md.nom_cabinet && eleme.role=="secretaire"){

        this.secs.push(eleme)
      }
        
    });
   
  },
  (error)=>{ //this.router.navigate(["/Admin"]);
    alert("wa l3adaw rah majach");
    
  }
           );
}

  ngOnInit(): void {
   this.getpat();
  }

  
  blockcmpt(cin:String){
    this.httpservice.changeetat(cin).subscribe(msg=>{
     console.log('Modifier avec succees');
     this.ngOnInit();
    
    });

      }

      supprimer(cin:String){
        this.httpservice.supprimeruser(cin).subscribe(msg=>{
          this.getpat();
        })
        
        
        }

    }
      
      
  
 
 

  

 


