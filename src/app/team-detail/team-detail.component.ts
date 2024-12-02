import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})

export class TeamDetailComponent implements OnInit {
 
  appRoute = inject(ActivatedRoute)
  team: { id: number; image: string; name: string } | undefined;


  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.team = this.dataService.getTeams().find(team => team.id === id);
    });
  }
  
} 
