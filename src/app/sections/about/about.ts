import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about-section',
  host: { 'id': 'aboutme' },
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutSection {
  static readonly sectionId = 'aboutme';
  static readonly sectionLabel = 'About';

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return `p-4 ${this.classes}`.trim(); }
}
