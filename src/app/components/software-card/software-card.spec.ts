import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCard } from './software-card';

describe('SoftwareCard', () => {
  let component: SoftwareCard;
  let fixture: ComponentFixture<SoftwareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
