import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private teams = [
    { id:1, image: 'assets/india.jpg', name: 'India'},
    { id:2, image: 'assets/s.africa.jpg', name: 'S. Africa'},
    { id:3, image: 'assets/england.jpg', name: 'England'},
    { id:4, image: 'assets/sri_lanka.jpg', name: 'Sri Lanka'},
    { id:5, image: 'assets/new_zealand.jpg', name: 'New Zealand' },
    { id:6, image: 'assets/Australia.jpg', name: 'Australia' },
    { id:7, image: 'assets/pakistan.jpg', name: 'Pakistan' },
    { id:8, image: 'assets/west_indies.webp', name: 'West Indies' },
    { id:9, image: 'assets/scotland.jpg', name: 'Scotland' },
    { id:10, image: 'assets/kenya.jpg', name: 'Kenya' },
    { id:11, image: 'assets/oman.jpg', name: 'Oman' }
  ];


  getTeams(){
    return this.teams;
  }

  private matchTable = [
    { name: 'RCB', matches: 10, points: 30, nrr: '+2.225' },
    { name: 'GT', matches: 10, points: 27, nrr: '+2.054' },
    { name: 'CSK', matches: 10, points: 24, nrr: '+1.345' },
  ];
  getMatchTable(){
    return this.matchTable;
  }

  matches = [
    {
      id:1,
      date: 'Friday, November 8',
      match: '1st T20, IND vs SA 2024',
      team1: { name: 'SA', score: '141', overs: '17.5', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '202/8', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'IND', detail: 'by 61 runs', color: 'blue' },
    },
    {
      id:2,
      date: 'Sunday, November 10',
      match: '2nd T20, IND vs SA 2024',
      team1: { name: 'SA', score: '128/7', overs: '19.0', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '124/6', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'SA', detail: 'by 3 wickets', color: 'green' },
    },
    {
      date: 'Wednesday, November 13',
      match: '3rd T20, IND vs SA 2024',
      team1: { name: 'SA', score: '208/7', overs: '20.0', flag: 'assets/flags/south-africa.png' },
      team2: { name: 'IND', score: '219/6', overs: '20.0', flag: 'assets/flags/india.png' },
      result: { winner: 'IND', detail: 'by 11 runs', color: 'blue' },
    },
  ];
  getMatches(){
    return this.matches;
  }


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
  getNewsTop(){
    return this.newsTop;
  }


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
  getnewsMain(){
    return this.newsMain;
  }

  
}
