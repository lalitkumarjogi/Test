import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  resgisterform=new FormGroup({
      username:new FormControl('',[Validators.required ,Validators.pattern('[a-zA-Z]+$')]),
      password:new FormControl('',Validators.required),
      cnfpassword: new FormControl('',Validators.required),
      zip: new FormControl('' ,[Validators.required,Validators.minLength(6)])
  })

onSubmit(){
 console.warn(this.resgisterform.value)
}
get username(){
  return this.resgisterform.get('username')

}
get zip(){
  return this.resgisterform.get('zip')
}

}