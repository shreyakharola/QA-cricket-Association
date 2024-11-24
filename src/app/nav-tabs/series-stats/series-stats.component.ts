import { Component } from '@angular/core';

@Component({
  selector: 'app-series-stats',
  standalone: true,
  imports: [],
  templateUrl: './series-stats.component.html',
  styleUrl: './series-stats.component.css'
})
export class SeriesStatsComponent {
  matchType = 'T20';
  team1 = {
    name: 'IND',
    flag: 'assets/flags/india.png', 
    score: 3
  };
  team2 = {
    name: 'SA',
    flag: 'assets/flags/south-africa.png', 
    score: 1
  };
  matchesPlayed = 4;
  seriesWinner = 'IND';
}
