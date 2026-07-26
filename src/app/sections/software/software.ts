import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-software',
  host: { 'id': 'software' },
  imports: [],
  templateUrl: './software.html',
  styleUrl: './software.scss',
})
export class Software {
  static readonly sectionId = 'software';
  static readonly sectionLabel = 'Software';

  @Input() bgClass = '';
  @HostBinding('class') get hostClass(): string { return this.bgClass; }
}
