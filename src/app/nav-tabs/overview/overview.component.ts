import { Component, OnInit } from '@angular/core';
import { TeamDetailComponent } from '../../team-detail/team-detail.component.js';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  teamId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.teamId = +params['id']; 
    });
}
}
