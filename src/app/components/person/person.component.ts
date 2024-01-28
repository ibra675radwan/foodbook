import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/core/models/person';
import {MatDialog} from '@angular/material/dialog';
import { PersonService } from 'src/app/core/services/person.service';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
  export class PersonComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    public displayedColumns: string[] = ['firstName', 'Ingrediants', 'price'];
    public columnsToDisplay: string[] = [...this.displayedColumns];
  
    public columnsFilters = {};
  
    public dataSource: MatTableDataSource<Person>;
    private serviceSubscribe!: Subscription;
  
    constructor(private personsService: PersonService, public dialog: MatDialog) {
      this.dataSource = new MatTableDataSource<Person>();
    }   
  
    edit(data: Person) {
    }
  
    delete(id: any) {}

  
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    ngOnInit(): void {
      this.personsService.getAll();
      this.serviceSubscribe = this.personsService.persons$.subscribe(res => {
        this.dataSource.data = res;
      })
    }
  
    ngOnDestroy(): void {
      this.serviceSubscribe.unsubscribe();
    }
  }


