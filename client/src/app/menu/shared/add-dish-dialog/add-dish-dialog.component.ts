import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '@models/dish.model';
import {MatListOption, MatSelectionListChange} from '@angular/material/list';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'vp-add-dish-dialog',
  templateUrl: './add-dish-dialog.component.html',
  styleUrls: ['./add-dish-dialog.component.scss']
})
export class AddDishDialogComponent implements OnInit {

  private selectedIndexes: MatListOption[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddDishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dish) {
  }

  public ngOnInit(): void {
    console.log(this.data);
  }

  public selectionChange(changeEvent: MatSelectionListChange): void {
    this.selectedIndexes = changeEvent.source.selectedOptions.selected;
  }

  public addDish(): void {
    this.data.options = this.selectedIndexes.map(option => option.value);
    this.dialogRef.close(this.data);
  }
}
