import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   get(){
    return  [
      {name:'lalit'}
    ]
   }
}
