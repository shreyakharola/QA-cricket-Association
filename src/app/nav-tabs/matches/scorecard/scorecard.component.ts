import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-scorecard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './scorecard.component.html',
  styleUrl: './scorecard.component.css'
})
export class ScorecardComponent {
 
  }