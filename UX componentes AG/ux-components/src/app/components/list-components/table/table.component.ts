import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface TableData {
  columnA: string;
  columnB: string;
  columnC: string;
  columnD: string;
}

const ELEMENT_DATA: TableData[] = [
  {columnA: "Cell", columnB: 'Cell', columnC: "Cell", columnD: 'Cell'},
  {columnA: "Cell", columnB: 'Cell', columnC: "Cell", columnD: 'Cell'},
  {columnA: "Cell", columnB: 'Cell', columnC: "Cell", columnD: 'Cell'},
  {columnA: "Cell", columnB: 'Cell', columnC: "Cell", columnD: 'Cell'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone:false
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'columnA', 'columnB', 'columnC', 'columnD'];
  dataSource = new MatTableDataSource<TableData>(ELEMENT_DATA);
  selection = new SelectionModel<TableData>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.columnB));
  }
}
