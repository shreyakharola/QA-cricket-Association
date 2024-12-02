import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-match-timetable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-timetable.component.html',
  styleUrl: './match-timetable.component.css'
})
export class MatchTableComponent {
  matchTable: any[]=[];
  constructor(private dataService: DataService){}
  
  ngOnInit(){
    this.matchTable = this.dataService.getMatchTable();
  }
}
