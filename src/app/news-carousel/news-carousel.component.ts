import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-carousel',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.css']
})
export class NewsCarouselComponent {
  images = ['assets/carousel/1.jpg', 'assets/carousel/2.jpg', 'assets/carousel/3.jpg'];
}