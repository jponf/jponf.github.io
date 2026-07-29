import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
  host: { 'id': 'presentation' }
})
export class Presentation {
  static readonly sectionId = 'presentation';
  static readonly sectionLabel = 'Home';

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }
}
