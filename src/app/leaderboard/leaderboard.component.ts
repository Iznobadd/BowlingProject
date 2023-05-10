import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  classement: { nom: string, points: number }[] = [
    { nom: 'Iznobad', points: 50 },
    { nom: 'Cachacaboy', points: 40 },
    { nom: 'Neograph', points: 30 },
  ];
}
