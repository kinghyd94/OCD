import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LabelConstants } from 'src/app/shared/label.constant';
import { DialogData } from '../login/login.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PassCodeComponent } from '../pass-code/pass-code.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  label = LabelConstants;
  animal: any;
  constructor(private router: Router,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
    ){}
  
  Navigate() {
    this.dialogRef.close();
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PassCodeComponent, {
      width: '540px',
      height: '390px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  navigateBack() {
    this.dialogRef.close();
  }
}
