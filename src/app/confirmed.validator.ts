import { FormGroup } from "@angular/forms";


export function confirmedValidator(controlName:string,matchingControlName:string){
     return (FormGroup: FormGroup) => {
        const control=FormGroup.controls[controlName];
        const matchingControl=FormGroup.controls[matchingControlName];
        if(matchingControl.errors && !matchingControl.errors.confirmedValidator){
              return
        }
        if( control.value !==matchingControl.value){
            matchingControl.setErrors({confirmedValidator:true});
        } else{
            matchingControl.setErrors(null)
        }
     }
}