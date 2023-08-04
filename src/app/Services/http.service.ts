import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medecin } from '../Models/Medecin';
import { catchError, Observable, throwError } from 'rxjs';
import { Token } from '@angular/compiler';
import { Patient } from '../Models/Patient';
import { Dossier } from '../Models/Dossier';
import { RDV } from '../Models/RDV';
import { Consultation } from '../Models/Consultation';
import { signinrequest } from '../Models/signinrequest';
import { Certificat } from '../Models/Certificat';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
url: String = 'http://localhost:8082/api/v1/';
public md : Medecin;
public pt:Patient;
public st:String;
ismenuOpened: boolean=true;





header=new HttpHeaders({"No-Auth":"true"});
  constructor(private http:HttpClient) { 
    
  }
  setst(st:String):void{
    this.st=st;
    }
    getst():String{
     return this.st;
      }
  setpt(pt:Patient):void{
    this.pt=pt;
    }
    getpt():Patient{
     return this.pt;
      }
      setMd(mid:Medecin):void{
        this.md=mid;
        }
        getMd():Medecin{
         return this.md;
          }
          public getPatientByCin(cin:String):Observable<Patient>{
  
            return this.http.get<Patient>(this.url+'getPatientByCin/'+cin);
          }
          public getPatientByCab(cin:String):Observable<Number>{
  
            return this.http.get<number>(this.url+'findPatientsByMedcin/'+cin);
          }
          
          public getRdvByCab(med:Medecin):Observable<Number>{
  
            return this.http.post<number>(this.url+'findPatientsByCab',med);
          }
          
          public sumtotale(cin:String):Observable<Number>{
  
            return this.http.get<number>(this.url+'gettotalByMedcin/'+cin);
          }
          
          public getPatientsCabinet(cabinet:String):Observable<Patient[]>{
            return this.http.get<Patient[]>(this.url+ 'PatientsByCabinet/'+cabinet).pipe(
              catchError((error) => {
                // Handle the error here, you can log it or perform any necessary actions
                console.error('Error retrieving patients:', error);
                
                // Rethrow the error to propagate it to the subscriber
                return throwError(error);
              })
            );
          }

      public getPatients():Observable<Patient[]>{
        return this.http.get<Patient[]>(this.url+ 'patients');
      }
      public addPatient(patient: Patient){
        console.log(patient);
        return this.http.post<Patient>(this.url+'addPatient', patient);
      }
      public supprimerpatient(cin:String):Observable<String>{
        return this.http.delete<String>(this.url+'delPatient/'+cin);
     }
     public supprimeruser(cin:String):Observable<String>{
      return this.http.delete<String>(this.url+'delMedecin/'+cin);
   }

  public getcur():Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.url+ 'currentUser');
  }
  public fetchAll():Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.url+ 'medcins');
  }
  public addMedecin(medecin: Medecin){
    return this.http.post<Medecin>(this.url+'registrer', medecin);
  }

 // public getAllPatientsBy():Observable<Patient[]>{
   // return this.http.get<Patient[]>(this.url+ 'getPatientsByMedcin/'+this.md);
 // }
  //Login
  getToken(data):Observable<any>{
   return this.http.post(this.url+'auth',data);
    
  }



  login(tkn:String):Observable<Medecin>{
    
    
    //const token=localStorage.getItem('token');
    //console.log('hada howa : '+tkn);
    const header=new HttpHeaders({
      'Authorization':'Bearer'+tkn

    });
   this.http.post<Medecin>(this.url+'currentUser',this.header);
return this.http.get<Medecin>(this.url+'getMed');
  }


  public getCurrentUser():Observable<Medecin>{
    console.log(this.http.get<Medecin>(this.url+'getMed'));
    return this.http.get<Medecin>(this.url+'getMed');
  }
  public setEtatPatient(cin:String):any{
  
    return this.http.put(this.url+'setEtatPatient/'+cin,{}
    );
    
  }
  public setmodpat(cin:String,pwd:String):any{
  
    return this.http.put(this.url+'setmoduser/'+cin,pwd);
    
  }

  public checkPwd(cin:String,pwd:String):any{
  console.log(pwd)
    return this.http.get(this.url+'chekpassword/'+cin+'/'+pwd);
    
  }

  public changeetat(cin:String):any{
  
    return this.http.put(this.url+'setEtatMedecin/'+cin,{});
    
  }

  public addRDV(rdv: RDV):Observable<RDV>{
    return this.http.post<RDV>(this.url+'addrdv', rdv);
  }


  public setmedcin(cin:String,med:Medecin):any{

  console.log(med);
    return this.http.put(this.url+'setmedecin/'+cin,med);
    
  }
  public setpatient(cin:String,pat:Patient):any{

    console.log(pat);
      return this.http.put(this.url+'setpatient/'+cin,pat);
      
    }
     
    public addDossier(dossier: Dossier){
      console.log("from Service");
      console.log(dossier)
      return this.http.post<Dossier>(this.url+'addDossier', dossier);
    }
  

//Rechercher par CIN
public getPatientsBySearch(cin :String):Observable<Patient[]>{
  console.log(cin);
  return this.http.get<Patient[]>(this.url+ 'getAllByCinSearch/'+cin);
}

//Rechercher par Nom
public getPatientsBySearchNom(nom :String):Observable<Patient[]>{
  console.log(nom);
  return this.http.get<Patient[]>(this.url+ 'getAllByNomSearch/'+nom);
}

public getDtnPatient(cin:String):Observable<Date>{
  return  this.http.get<Date>(this.url+'getDtnByCin/'+cin);
}
public sallePatientValider(cin:String):any{
  
  return this.http.put(this.url+'validerPatient/'+cin,{});
  
}

public getAllConsultationByDate(d1 :string,d2:string,cabinet:String):Observable<Consultation[]>{
  //console.log(nom);
  return this.http.get<Consultation[]>(this.url+ 'consultations/'+d1+'/'+d2+'/'+cabinet);
}

public deleteConsultation(num:Number):Observable<String>{
  console.log('ja lservice delete');
console.log(num)
   return  this.http.delete<String>(this.url+ 'deleteConsultation/'+num, { responseType: 'text' as 'json'});
}


public getNombrePatient(cabinet:String):Observable<number[]>{
  
  return this.http.get<number[]>(this.url+ 'NombrePatEnMois/'+cabinet);
}

public getCaisse(cabinet:String):Observable<number[]>{
  
  return this.http.get<number[]>(this.url+ 'caisse/'+cabinet);
}
public getAllConsult(cin:String):Observable<Consultation[]>{
  
  return this.http.get<Consultation[]>(this.url+ 'allConsult/'+cin);
}

public adddCONS( cin: String,CONS: Consultation):Observable<Consultation>{
  return this.http.post<Consultation>(this.url+'addconsultation/'+cin, CONS);
}
public addcert( num: number,cert: Certificat){
      console.log('from service 11')
      console.log(cert)
  return this.http.post<Consultation>(this.url+'addcertificat/'+num, cert);
}


public getconsByNum( num: number):Observable<Consultation>{
 
  return this.http.get<Consultation>(this.url+'getByNum/'+num);
}


public getAllRDV( cabinet: String):Observable<RDV[]>{
 
  return this.http.get<RDV[]>(this.url+'listeRDV/'+cabinet);
}




public delRDV(num:Number):Observable<String>{
  console.log('ja lservice delete');
console.log(num)
   return  this.http.delete<String>(this.url+ 'delRDV/'+num, { responseType: 'text' as 'json'});
}

public getrdvBySearch(cin :String):Observable<RDV[]>{
  console.log(cin);
  return this.http.get<RDV[]>(this.url+ 'listeRDVByNum/'+cin);
}


public getrdvByDate(date :Date):Observable<RDV[]>{
  
  return this.http.get<RDV[]>(this.url+ 'listeRDVByNDate/'+date);
}
}

