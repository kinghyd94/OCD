import { Component, OnInit } from '@angular/core';
import { LabelConstants } from 'src/app/shared/label.constant';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide = true;
myForm: FormGroup;
phoneNumber: any;
username: any;
emailFormControl: any
label = LabelConstants;
constructor(private fb: FormBuilder){
  this.myForm = this.fb.group({
    username: [undefined, [Validators.required]],
    phone: [undefined, [Validators.required]],
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
});
}
ngOnInit(): void {
  // this.myForm = new FormGroup({
  //   emailFormControl: new FormControl('', [Validators.required, Validators.email])
  // })
}
}

