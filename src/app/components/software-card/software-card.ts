import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { SoftwareEntry } from '../../models/software-entry';

@Component({
  selector: 'app-software-card',
    host: {
    'class': 'col-12 col-sm-12 col-md-4 col-lg-4',
  },
  imports: [FontAwesomeModule],
  templateUrl: './software-card.html',
  styleUrl: './software-card.scss',
})
export class SoftwareCard {
  @Input() software!: SoftwareEntry;

  faCircle = faCircle;

  readonly LANG_COLOR: Record<string, string> = {
    'python': '#3572A5',
    'c++': '#f34b7d',
    'c': '#555555',
    'java': '#b07219',
    'typescript': '#2b7489',
    'javascript': '#f1e05a',
    'rust': '#dea584',
    'go': '#00ADD8',
  };

  langColor(lang: string): string {
    return this.LANG_COLOR[lang.toLowerCase()] || '#888888';
  }
}
