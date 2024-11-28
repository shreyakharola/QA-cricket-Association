import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TeamSelectMainComponent } from '../team-select-main/team-select-main.component';
import { NewsCarouselComponent } from '../news-carousel/news-carousel.component';
import { MatchTableComponent } from '../match-timetable/match-timetable.component';
import { FooterComponent } from "../footer/footer/footer.component";
import { ScorecardComponent } from "../nav-tabs/matches/scorecard/scorecard.component";
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TeamSelectMainComponent, NewsCarouselComponent, MatchTableComponent, ScorecardComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  scrollRight() {
    this.cardRow.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
  teams = [
    { id:1, image: 'assets/india.jpg', name: 'India' },
    { id:2, image: 'assets/s.africa.jpg', name: 'S. Africa' },
    { id:3, image: 'assets/england.jpg', name: 'England' },
    { id:4, image: 'assets/sri_lanka.jpg', name: 'Sri Lanka' },
    { id:5, image: 'assets/new_zealand.jpg', name: 'New Zealand' },
    { id:6, image: 'assets/Australia.jpg', name: 'Australia' },
    { id:7, image: 'assets/pakistan.jpg', name: 'Pakistan' },
    { id:8, image: 'assets/west_indies.webp', name: 'West Indies' },
    { id:9, image: 'assets/scotland.jpg', name: 'Scotland' },
    { id:10, image: 'assets/kenya.jpg', name: 'Kenya' },
    { id:11, image: 'assets/oman.jpg', name: 'Oman' }
  ];


  @ViewChild('cardRow', { read: ElementRef }) cardRow!: ElementRef;



}
