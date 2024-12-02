import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
  matches: any[]=[];
  teamId!: number;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.matches = this.dataService.getMatches();
  }
  
  navigateToScorecard() {
    this.router.navigate(['/scorecard']);
  }

}
