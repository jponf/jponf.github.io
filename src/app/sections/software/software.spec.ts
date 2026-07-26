import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Software } from './software';

describe('Software', () => {
  let component: Software;
  let fixture: ComponentFixture<Software>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Software],
    }).compileComponents();

    fixture = TestBed.createComponent(Software);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
