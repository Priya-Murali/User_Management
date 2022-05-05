import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Registerdet}from './models/Registerdet';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private http : HttpClient) { }
    public getRegisterdet(app:Registerdet ){
      return this.http.post("http://localhost:8080/addreg",app);
   }
}
