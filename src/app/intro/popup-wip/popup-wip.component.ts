import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-popup-wip',
  template: ``,
})
export class PopupWipComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialog.open(DialogElement);
  }

  public closeDialog() {
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'dialog-elements',
  template: `
  <h1 mat-dialog-title>This Website is still in developement</h1>
  <p mat-dialog-content>I develop this website on my free time and alongside all my others projets, <br>please be aware that it's not finished. Thanks.</p>
  <div>
    <button mat-button (click)="onClick()">Click to continue</button>
  </div>
  `,
  styles:[
    'h1 {color: #ffff;}',
    'p {color: #ffff;}',
    'button {color: black; background-color: white; border: 1px solid #white; radius: 5px;}',
  ]
})
export class DialogElement {
  constructor(public dialogRef: MatDialogRef<DialogElement>) {}
  onClick(): void {
    this.dialogRef.close();
  }
}
