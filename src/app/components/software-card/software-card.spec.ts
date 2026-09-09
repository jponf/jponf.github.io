import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCard } from './software-card';
import { SoftwareEntry } from '../../models/software-entry';

describe('SoftwareCard', () => {
  let component: SoftwareCard;
  let fixture: ComponentFixture<SoftwareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareCard);
    component = fixture.componentInstance;
    component.software = {
      name: 'sample-software',
      about: 'Sample software description.',
      languages: ['Python'],
      url: 'https://github.com/example/sample-software',
    } as SoftwareEntry;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
