import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  host: { 'id': 'contactme' },
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  static readonly sectionId = 'contactme';
  static readonly sectionLabel = 'Contact';

  @Input() bgClass = '';
  @HostBinding('class') get hostClass(): string { return this.bgClass; }
}
