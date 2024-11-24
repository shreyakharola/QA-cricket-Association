import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-squads',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})
export class SquadsComponent {
  title = 'IND vs SA 2024 Squads';
  teams = [
    {
      name: 'India',
      flag: 'assets/flags/india.png', 
      playersCount: 15,
      players: [
        { name: 'S Samson (wk)', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'S Yadav (c)', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'R Singh', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'J Sharma (wk)', role: 'Batsman', avatar: 'assets/user.png' },
      ]
    },
    {
      name: 'South Africa',
      flag: 'assets/flags/qatar.png',
      playersCount: 16,
      players: [
        { name: 'S Samson (wk)', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'S Yadav (c)', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'R Singh', role: 'Batsman', avatar: 'assets/user.png' },
        { name: 'J Sharma (wk)', role: 'Batsman', avatar: 'assets/user.png' },
      ]
    }
  ];
  ngOnInit(){
    if(this.teams.length > 0){
      this.selectedTeam = this.teams[0];
    }
  }
  selectedTeam: any;
  showPlayers(index: number) {
    this.selectedTeam = this.teams[index];
  }
}
