import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})

export class TeamDetailComponent implements OnInit {
  appRoute = inject(ActivatedRoute)
  team: { id: number; image: string; name: string } | undefined;

  teams = [
    { id: 1, image: 'assets/india.jpg', name: 'India' },
    { id: 2, image: 'assets/s.africa.jpg', name: 'S. Africa' },
    { id: 3, image: 'assets/england.jpg', name: 'England' },
    { id: 4, image: 'assets/sri_lanka.jpg', name: 'Sri Lanka' },
    { id: 5, image: 'assets/new_zealand.jpg', name: 'New Zealand' },
    { id: 6, image: 'assets/Australia.jpg', name: 'Australia' },
    { id: 7, image: 'assets/pakistan.jpg', name: 'Pakistan' },
    { id: 8, image: 'assets/west_indies.webp', name: 'West Indies' },
    { id: 9, image: 'assets/scotland.jpg', name: 'Scotland' },
    { id: 10, image: 'assets/kenya.jpg', name: 'Kenya' },
    { id: 11, image: 'assets/oman.jpg', name: 'Oman' }
  ];
teamId: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.team = this.teams.find(team => team.id === id);
    });
  }
} 
