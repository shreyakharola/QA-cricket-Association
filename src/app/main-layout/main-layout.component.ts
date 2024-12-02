import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TeamSelectMainComponent } from '../team-select-main/team-select-main.component';
import { NewsCarouselComponent } from '../news-carousel/news-carousel.component';
import { MatchTableComponent } from '../match-timetable/match-timetable.component';
import { FooterComponent } from "../footer/footer/footer.component";
import { ScorecardComponent } from "../nav-tabs/matches/scorecard/scorecard.component";
import { DataService } from '../data.service';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TeamSelectMainComponent, NewsCarouselComponent, MatchTableComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  teams: any[]=[];
  scrollRight() {
    this.cardRow.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  constructor(private dataService: DataService){}
  
  ngOnInit(){
    this.teams = this.dataService.getTeams();
  }

  
  @ViewChild('cardRow', { read: ElementRef }) cardRow!: ElementRef;



}
