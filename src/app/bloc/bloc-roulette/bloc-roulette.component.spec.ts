import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocRouletteComponent } from './bloc-roulette.component';

describe('BlocRouletteComponent', () => {
  let component: BlocRouletteComponent;
  let fixture: ComponentFixture<BlocRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocRouletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
