import { Component } from '@angular/core';
import { LabelConstants } from 'src/app/shared/label.constant';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
hide = true;
label = LabelConstants;

}
