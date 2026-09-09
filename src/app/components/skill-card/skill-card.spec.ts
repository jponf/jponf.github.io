import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCard } from './skill-card';
import { SkillEntry } from '../../models/skill-entry';

describe('SkillCard', () => {
  let component: SkillCard;
  let fixture: ComponentFixture<SkillCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillCard);
    component = fixture.componentInstance;
    component.skill = {
      name: 'Sample Skill',
      img: 'sample.min.png',
      level: 5,
    } as SkillEntry;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
