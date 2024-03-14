import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface TableCell {
  columnA: string;
  columnB: string;
  columnC: string;
  columnD: string;
}

const ELEMENT_DATA: TableCell[] = Array(4).fill({ columnA: 'head', columnB: 'cell', columnC: 'cell', columnD: 'cell' });

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'columnA', 'columnB', 'columnC', 'columnD'];
  dataSource = new MatTableDataSource<TableCell>(ELEMENT_DATA);
  selection = new SelectionModel<TableCell>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  checkboxLabel(row?: TableCell): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.columnA + 1}`;
  }
}