import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Students } from '../models/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DashboardComponent implements OnInit {
  studentArray : Students[] = [
    {
      id : 1,
      name : 'Ameth',
      asignatures : ['Ingles','POO2','Algoritmos2']
    },
    {
      id : 2,
      name : 'Milton',
      asignatures : ['Ingles','POO2','Algoritmos2','Base de Datos']
    },
    {
      id : 3,
      name : 'Bryan',
      asignatures : ['Ingles','POO2','Algoritmos2', 'Calculo Integral', 'Calculo Vectorial']
    },
    {
      id : 4,
      name : 'Gael',
      asignatures : ['Ingles','POO2','Algoritmos2', 'Concurrente']
    }
  ] 

  ngOnInit(): void {
    console.log(this.studentArray)
    //this.studentArray.push(this.myStuden1)
  }

  showName (name : string) {
    alert(name)
  }

  deleteStudent(id : number) {
    var newListStudent: Students[] = this.studentArray
    this.studentArray = newListStudent.filter(student => student.id != id) 
  }

  private breakpointObserver = inject(BreakpointObserver);
  miEstado: boolean = false
  imprime : string = "Subtitulo"  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
