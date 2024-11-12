import { Component } from '@angular/core';
import { TeamDetailComponent } from '../../team-detail/team-detail.component';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [TeamDetailComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

}
