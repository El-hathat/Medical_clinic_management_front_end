import { HttpService } from "../Services/http.service";
import { Medecin } from "./Medecin";
import { Patient } from "./Patient";

export class Dossier{
    constructor(private http:HttpService){

    }
    
    sang : String;
    situation_F:String;
    date_Naissance:Date;
    date_dos: Date;
    note:String;
    patient:Patient=this.http.pt;
   
}