import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient
  ) { }

  getNames(name=null){
    if(name){
     return this.http.get(`https://61824bbb84c2020017d89da4.mockapi.io/api/v1/names?name=${name}`)
    }
    else{
      return this.http.get('https://61824bbb84c2020017d89da4.mockapi.io/api/v1/')
    }
    
  }

  
}
