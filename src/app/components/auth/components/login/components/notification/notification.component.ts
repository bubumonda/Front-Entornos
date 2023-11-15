import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

export interface DialogData {
  name: string;
  tipo: string;
}
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  spinner: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    setTimeout(() => {
      this.spinner = false;
      setTimeout(() => {
        this.dialogRef.close();
      }, 1000);
    }, 1000);
  }

  onNoClick(): void {}
}
