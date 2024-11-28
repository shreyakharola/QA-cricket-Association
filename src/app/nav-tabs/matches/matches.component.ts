import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {


  matches = [
    {
      id:1,
      date: 'Friday, November 8',
      match: '1st T20, IND vs SA 2024',
      team1: { name: 'SA', score: '141', overs: '17.5', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '202/8', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'IND', detail: 'by 61 runs', color: 'blue' },
    },
    {
      id:2,
      date: 'Sunday, November 10',
      match: '2nd T20, IND vs SA 2024',
      team1: { name: 'SA', score: '128/7', overs: '19.0', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '124/6', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'SA', detail: 'by 3 wickets', color: 'green' },
    },
    {
      date: 'Wednesday, November 13',
      match: '3rd T20, IND vs SA 2024',
      team1: { name: 'SA', score: '208/7', overs: '20.0', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '219/6', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'IND', detail: 'by 11 runs', color: 'blue' },
    },
  ];


  teamId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.teamId = +params['id'];
    });
  }

  navigateToScorecard() {
    this.router.navigate(['/scorecard']);
  }



}
