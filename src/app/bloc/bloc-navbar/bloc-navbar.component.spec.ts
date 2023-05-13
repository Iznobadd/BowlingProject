import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNavbarComponent } from './bloc-navbar.component';

describe('NavbarComponent', () => {
  let component: BlocNavbarComponent;
  let fixture: ComponentFixture<BlocNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
