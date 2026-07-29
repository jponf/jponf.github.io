import { Component, Input } from '@angular/core';
import { WebappEntry } from '../../models/webapp-entry';

@Component({
  selector: 'app-webapp-card',
  host: {
    'class': 'col-12 col-sm-12 col-md-4 col-lg-4',
  },
  imports: [],
  templateUrl: './webapp-card.html',
  styleUrl: './webapp-card.scss',
})
export class WebappCard {
  @Input() webapp!: WebappEntry;
}
