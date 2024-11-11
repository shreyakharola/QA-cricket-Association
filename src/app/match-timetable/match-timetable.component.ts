import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-match-timetable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-timetable.component.html',
  styleUrl: './match-timetable.component.css'
})
export class MatchTableComponent {
  teams = [
    { name: 'RCB', matches: 10, points: 30, nrr: '+2.225' },
    { name: 'GT', matches: 10, points: 27, nrr: '+2.054' },
    { name: 'CSK', matches: 10, points: 24, nrr: '+1.345' },
  ];
}
