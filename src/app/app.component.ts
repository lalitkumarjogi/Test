import { Component } from '@angular/core';
import {DataService} from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blow';
  test:any

  constructor(private el:DataService){
    this.test = el.get();
   console.log(this.el.get())
  }

  

}
  
