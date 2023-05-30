import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LabelConstants } from 'src/app/shared/label.constant';
import { DialogData } from '../login/login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-pass-code',
  templateUrl: './pass-code.component.html',
  styleUrls: ['./pass-code.component.scss']
})
export class PassCodeComponent {
label = LabelConstants;
  animal: any;
 constructor(
  public dialogRef: MatDialogRef<PassCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
 ) {}

 Navigate() {
  this.dialogRef.close();
  this.openDialog();
 }
 openDialog(): void {
  const dialogRef = this.dialog.open(ResetPasswordComponent, {
    width: '540px',
    height: '510px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}
}
