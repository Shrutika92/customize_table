import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, merge } from 'rxjs';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // @ViewChild(MatSort) sort: MatSort;

  data = new MatTableDataSource(ELEMENT_DATA) ;
   columns: string[] = Object.keys(this.data.data[0]);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(){
  }
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }

  hideColumn(item: any){
    let index = this.columns.indexOf(item);
    this.columns.splice(index, 1);
  }
  showAll(){
    this.columns = Object.keys(this.data.data[0]);
  }

}
