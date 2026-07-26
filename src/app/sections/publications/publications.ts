import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-publications',
  host: { 'id': 'publications' },
  imports: [],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  static readonly sectionId = 'publications';
  static readonly sectionLabel = 'Publications';

  @Input() bgClass = '';
  @HostBinding('class') get hostClass(): string { return this.bgClass; }
}
