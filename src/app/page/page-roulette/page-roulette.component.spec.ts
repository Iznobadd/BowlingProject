import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRouletteComponent } from './page-roulette.component';

describe('PageRouletteComponent', () => {
  let component: PageRouletteComponent;
  let fixture: ComponentFixture<PageRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRouletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
