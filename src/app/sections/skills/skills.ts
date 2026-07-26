import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skills',
  host: { 'id': 'skills' },
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  static readonly sectionId = 'skills';
  static readonly sectionLabel = 'Skills';

  @Input() bgClass = '';
  @HostBinding('class') get hostClass(): string { return this.bgClass; }
}
