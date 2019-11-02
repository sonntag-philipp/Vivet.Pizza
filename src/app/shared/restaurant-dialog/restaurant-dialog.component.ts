import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Restaurant} from '../restaurant.model';

@Component({
  selector: 'vp-restaurant-dialog',
  templateUrl: './restaurant-dialog.component.html',
  styleUrls: ['./restaurant-dialog.component.scss']
})
export class RestaurantDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RestaurantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Restaurant) {}

}
