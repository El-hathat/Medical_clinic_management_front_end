import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { Patient } from 'src/app/Models/Patient';
import { HttpService } from 'src/app/Services/http.service';
Chart.register(...registerables)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  nb:number;
  nbrdv:number;
  total:number=0;
  prix:number=0;
  totalecaisse:number=0;
  patients:Patient[];
 
  // patientNombre: any
  
  constructor(private http:HttpService ){
   
  
  }
  getnbpat(){
    
      this.http.getPatientByCab(this.http.md.nom_cabinet).subscribe((result: any)=>{
          
        this.nb=result;
        
                  });

                    
  }
  gettotal(){
    
    
     
        this.http.getPatientsCabinet(this.http.md.nom_cabinet).subscribe((result: any)=>{
      
          

          this.patients.forEach(element => {

            this.http.sumtotale(element.cin).subscribe((hh: any)=>{
              console.log(element);
        
              this.prix=hh;
              this.total=this.total+this.prix;
              console.log(this.prix);

                        });
                        
                      
            
          });
          
                    });
                  
      
        
    
  
}
  getnbrdv(){
    
    this.http.getRdvByCab(this.http.md).subscribe((result: any)=>{
        
      this.nbrdv=result;
      
                });
  
}

  title = 'frontcab';
  ngOnInit(): void{
//this.getNbPatientByEtat();
    this.http.getCaisse(this.http.md.nom_cabinet).subscribe(res=>{
      this.getnbrdv();
      console.log(res)
      this.otherChart(res);  
      res.forEach(element => {
        this.totalecaisse=this.totalecaisse+element;
        
      });
    });
    
    
    this.http.getNombrePatient(this.http.md.nom_cabinet).subscribe(res=>{
      console.log(res)
      this.RenderChart(res);
});



    this.getnbpat();
   // this.otherChart(null);

  }

  

  RenderChart(tableau:any){

    const myChart = new Chart("myChart",{
      type:'bar',
      data:{
        labels:['Jan','Fev','Mars','Avril','Mai','Juin','Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          label: 'Dossier Medicale',
          data:tableau,
          backgroundColor:[
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
          ],
          borderColor:[
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
            'rgb(255,69,0) ',
          ],
          borderWidth:1
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      }
    });
  }

 
  otherChart(tableau:any){
//console.log(this.patientNombre)
    const myChart = new Chart("otherChart",{
      type:'line',
      data:{
        labels:['Jan','Fev','Mars','Avril','Mai','Juin','Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          label: 'caisse',
          data:tableau,
          
          backgroundColor:[
            '#0000FF',
            '#0000FF ',
            '#0000FF ',
            '#0000FF',
            '#0000FF',
            '#0000FF',
          ],
          borderColor:[
            '#0000FF',
            '#0000FF ',
            '#0000FF ',
            '#0000FF',
            '#0000FF',
            '#0000FF',
          ],
          borderWidth:1
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      }
    });
  }
}




