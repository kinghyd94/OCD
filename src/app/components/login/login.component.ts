import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
myForm: FromGroup;
phoneNumber: any;
constructor(private fb: FormBuilder){
  this.myForm = this.fb.group({
    phone: [undefined, [validators.required]],
    email:new FormControl('', [
      validators.required,
      validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

});
}
}

