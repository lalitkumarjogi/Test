import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  get(){
    console.warn(this.loginForm.value)
  }
  

  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  
  })
get username(){
  return this.loginForm.get('username')
   
}
get password(){
  return this.loginForm.get('password')
}
  
}
