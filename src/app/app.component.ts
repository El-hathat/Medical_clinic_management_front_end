import { Component } from '@angular/core';
import { Medecin } from './Models/Medecin';
import { HttpService } from './Services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sami:Medecin ;
  title = 'CAB';
  constructor(private httpservice: HttpService){
   this.sami=this.httpservice.getMd();
  }
   }
  



