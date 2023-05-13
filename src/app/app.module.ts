import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocNavbarComponent } from './bloc/bloc-navbar/bloc-navbar.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageRouletteComponent } from './page/page-roulette/page-roulette.component';
import { PageLeaderboardComponent } from './page/page-leaderboard/page-leaderboard.component';
import { PageContactComponent } from './page/page-contact/page-contact.component';
import { BlocRouletteComponent } from './bloc/bloc-roulette/bloc-roulette.component';
import { BlocLeaderboardComponent } from './bloc/bloc-leaderboard/bloc-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocNavbarComponent,
    PageHomeComponent,
    PageRouletteComponent,
    PageLeaderboardComponent,
    PageContactComponent,
    BlocRouletteComponent,
    BlocLeaderboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
