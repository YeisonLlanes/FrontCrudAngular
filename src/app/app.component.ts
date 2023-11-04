import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { Departamento } from './Interfaces/departamento';
import { DepartamentoService } from './Services/departamento.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  title = 'CrudAngular';

  displayedColumns: string[] = ['Id', 'Departamento', 'opciones'];
  dataSource = new MatTableDataSource<Departamento>();
  
  constructor(private _departamentoServicio: DepartamentoService)
  {

  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this._departamentoServicio.getList().subscribe({
      next:(datos) =>{
        console.log(datos);
        this.dataSource.data = datos;
      },error:(e)=>{}
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
