import { Component, inject, Injectable, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-team-select-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-select-main.component.html',
  styleUrl: './team-select-main.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class TeamSelectMainComponent {
  @Input() teamId: number = 0;
  @Input() teamImage: string = '';
  @Input() teamName: string = '';
  

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/cards', this.teamId]);
  }
}

