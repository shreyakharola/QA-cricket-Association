import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { MatchTableComponent } from './match-timetable/match-timetable.component';
import { TeamSelectMainComponent } from './team-select-main/team-select-main.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { TeamDetailComponent } from "./team-detail/team-detail.component";
import path from 'path';
import { appRoutes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TeamSelectMainComponent, CommonModule, MatchTableComponent, NewsCarouselComponent, TeamDetailComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'QA-cricket-association';
}