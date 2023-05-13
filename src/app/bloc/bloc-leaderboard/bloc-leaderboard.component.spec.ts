import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocLeaderboardComponent } from './bloc-leaderboard.component';

describe('BlocLeaderboardComponent', () => {
  let component: BlocLeaderboardComponent;
  let fixture: ComponentFixture<BlocLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
