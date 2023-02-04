import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  resgisterform: FormGroup =new FormGroup({})     
  constructor(private fb:FormBuilder){            
      this.resgisterform=fb.group({
 
           username:['',[Validators.required]],
           password:['',[Validators.required]],
           confirm_password:['',Validators.required],
           zip:['',Validators.required,Validators.minLength(6)]

      }

      )}
  

  get username(){
    return this.resgisterform.get('username')
  }
  get zip(){
    return this.resgisterform.get('zip')
  }
  onSubmit(){
    console.warn(this.resgisterform.value)

  }
  get f(){
    return this.resgisterform.controls
  }
}