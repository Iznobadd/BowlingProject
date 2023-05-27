import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageLeaderboardComponent } from './page/page-leaderboard/page-leaderboard.component';
import { PageRouletteComponent } from './page/page-roulette/page-roulette.component';
import { PageContactComponent } from './page/page-contact/page-contact.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'scores', component: PageLeaderboardComponent },
  { path: 'roulette', component: PageRouletteComponent },
  { path: 'contact', component: PageContactComponent },
  { path: '**', component: PageHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
