import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'vp-join-dialog',
  templateUrl: './join-order-dialog.component.html',
  styleUrls: ['./join-order-dialog.component.scss']
})
export class JoinOrderDialogComponent {

  private _inputObservable: Subject<string> = new Subject<string>();

  constructor(
    public dialogRef: MatDialogRef<JoinOrderDialogComponent>,
    private db: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this._inputObservable.pipe(
      debounceTime(1000)
    ).subscribe(
      next => {
        console.log(next);
      }
    );
  }

  returnId(value: string) {
    this.dialogRef.close(value);
  }

  inputChanged(event: any) {

  }
}
