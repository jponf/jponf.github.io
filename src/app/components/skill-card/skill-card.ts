import { Component, Input } from '@angular/core';
import { SkillEntry } from '../../models/skill-entry';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
  host: {
    "class": "col-sm-12 col-md-4 col-lg-4 mb-2"
  }
})
export class SkillCard {
  @Input() skill!: SkillEntry;
}
