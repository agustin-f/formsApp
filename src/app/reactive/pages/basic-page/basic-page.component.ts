import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

 public myForm:FormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      inStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
 })


 onSave(){
  console.log(this.myForm.value);
 }

}
