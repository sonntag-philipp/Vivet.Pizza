import { Component, OnInit } from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {MenuItemModel} from '../shared/models/menu-item.model';
import {SelectionDialogComponent} from './selection-dialog/selection-dialog.component';
import {OrderService} from '../shared/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'vp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public dataSource = new MatTableDataSource(this.menuService.menu.items);
  public displayedColumns = ["id", "name", "price"];

  constructor(
    public menuService: MenuService,
    private orderService: OrderService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      next => {
        if (next.id !== undefined) {
          this.orderService.id = next.id;
        }
      }
    );
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  selectElement(element: MenuItemModel) {
    console.log("Siemens");
    const dialogRef = this.dialog.open(SelectionDialogComponent, {
      width: '250px',
      data: {
        selectedElement: element
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
