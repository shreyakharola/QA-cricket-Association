import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsTop = [
    {
      title: 'Gerald Coetzee, Scott Edwards Penalized For Violating ICC Code Of Conduct',
      author: 'JATIN',
      time: '23 hrs ago',
      image: 'assets/news.jpeg', 
    },
    {
      title: "'Guy From OneFamily Scored Runs' - SKY Upsets Fans With MI Reference",
      author: 'ABHINAV TYAGI',
      time: '16 Nov 2024',
      image: 'assets/news.jpeg',
    },
    {
      title: "Pakistan's Record Broken! India Attain Huge Milestone With South Africa Series Win",
      author: 'DEBASHIS SARANGI',
      time: '18 Nov 2024',
      image: 'assets/news.jpeg',
    },
    {
      title: "'Man Has Done Wonders At No. 3,' Surya's Tribute To Kohli As Tilak Lights Up SA vs IND T20Is",
      author: 'JATIN',
      time: '16 Nov 2024',
      image: 'assets/news.jpeg',
    },
  ];

  newsMain = [
    {
      title: "'Had So Many Failures In Life': Sanju Samson's Emotional Confession After Stunning Century",
      author: 'ANURAG DASGUPTA',
      time: '16 Nov 2024',
      description:'Sanju Samson had an emotional outburst as he scored his second T20I century of the series and helped India win the contest.',
      image: 'assets/news.jpeg',
    },
    {
      title:"Suryakumar Kisses Cap After Accidentally Stepping On It In Moving Gesture",
      author: 'AKSHITA PATEL',
      time: '16 Nov 2024',
      description:'Suryakumar Yadav’s gesture during India’s emphatic victory over South Africa in the fourth T20I has gone viral for its respect towards the Indian cricket crest.',
      image: 'assets/news.jpeg',
    },
  ];

}
