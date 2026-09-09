import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ContributionCard } from './contribution-card';
import { Contribution } from '../../models/contribution';

describe('ContributionCard', () => {
  let component: ContributionCard;
  let fixture: ComponentFixture<ContributionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionCard],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContributionCard);
    component = fixture.componentInstance;
    component.contribution = {
      project: 'sample-project',
      projectUrl: 'https://github.com/example/sample-project',
      title: 'Sample contribution title',
      description: 'Sample contribution description.',
      prUrl: 'https://github.com/example/sample-project/pull/1',
      status: 'merged',
    } as Contribution;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
