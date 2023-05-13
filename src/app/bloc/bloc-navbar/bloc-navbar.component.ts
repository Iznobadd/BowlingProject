import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './bloc-navbar.component.html',
  styleUrls: ['./bloc-navbar.component.css']
})
export class BlocNavbarComponent {
  @Output() leaderboardClicked = new EventEmitter<void>();

  onLeaderboardClick() {
    this.leaderboardClicked.emit();
  }
}
