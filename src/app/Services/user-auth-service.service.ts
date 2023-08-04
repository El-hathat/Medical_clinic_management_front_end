import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
  }

  public getRoles():[] {
    return JSON.parse(localStorage.getItem("roles") || '{}');
  }

  public seToken(jwtToken: string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken():string {
    return localStorage.getItem("jwtToken") || '';
  }
public clear(){
  localStorage.clear();
}

public isLoggedIn(){
  return this.getRoles() && this.getToken();
}

}


