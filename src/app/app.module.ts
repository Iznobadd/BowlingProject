import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageRouletteComponent } from './page/page-roulette/page-roulette.component';
import { PageLeaderboardComponent } from './page/page-leaderboard/page-leaderboard.component';
import { PageContactComponent } from './page/page-contact/page-contact.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LeaderboardComponent, PageHomeComponent, PageRouletteComponent, PageLeaderboardComponent, PageContactComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
