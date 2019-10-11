import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MenuItemModel} from '../../shared/models/menu-item.model';
import {MenuItemOptionModel} from '../../shared/models/menu-item-option.model';

@Component({
  selector: 'vp-selection-dialog',
  templateUrl: './selection-dialog.component.html',
  styleUrls: ['./selection-dialog.component.scss']
})
export class SelectionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {selectedElement: MenuItemModel}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectOption(item: MenuItemOptionModel) {
    this.dialogRef.close(item);
  }
}
