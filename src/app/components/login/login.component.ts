import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LabelConstants } from 'src/app/shared/label.constant';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

export interface DialogData {
  animal: string;
  name: string;
}
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
  animal: any;
constructor(private fb: FormBuilder, private dialog: MatDialog, private toastr: ToastrService ){
  this.myForm = this.fb.group({
    username: [undefined, [Validators.required]],
    phone: [undefined, [Validators.required]],
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
});
}
ngOnInit(): void {

}
openDialog(): void {
  const dialogRef = this.dialog.open(ForgotPasswordComponent, {
    width: '480px',
    height: '410px',
    data: {}
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

login() {
  this.toastr.success('Logged in successfully', 'Login', {
    positionClass: 'toast-top-right'
  });
}
}

