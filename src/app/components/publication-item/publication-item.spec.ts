import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationItem } from './publication-item';

describe('PublicationItem', () => {
  let component: PublicationItem;
  let fixture: ComponentFixture<PublicationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
