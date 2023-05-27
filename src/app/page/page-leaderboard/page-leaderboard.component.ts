import { Component } from '@angular/core';

@Component({
  selector: 'app-page-leaderboard',
  templateUrl: './page-leaderboard.component.html',
  styleUrls: ['./page-leaderboard.component.css'],
})
export class PageLeaderboardComponent {
  joueurs: any[] = [
    {
      nom: 'Iznobad',
      score: [
        151, 169, 129, 114, 120, 99, 130, 83, 147, 142, 143, 133, 109, 127, 184,
        107,
      ],
      classement: 2,
    },
    {
      nom: 'Neograph',
      score: [
        135, 162, 169, 146, 114, 124, 129, 143, 143, 147, 158, 130, 152, 178,
        164, 157,
      ],
      classement: 1,
    },
    {
      nom: 'Cachacaboy',
      score: [
        89, 126, 79, 147, 105, 158, 83, 131, 148, 115, 125, 136, 118, 135, 129,
        54,
      ],
      classement: 3,
    },
  ];

  constructor() {}
}
