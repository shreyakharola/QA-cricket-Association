import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsTop: any[]=[];
  newsMain: any[]=[];
  constructor(private dataService: DataService){}
  
  ngOnInit(){
    this.newsTop = this.dataService.getNewsTop();
    this.newsMain=this.dataService.getnewsMain();
  }
}
