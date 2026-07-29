import { Component, Input, HostBinding } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  host: { 'id': 'contactme' },
  imports: [FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  static readonly sectionId = 'contactme';
  static readonly sectionLabel = 'Contact';

  readonly faGithub = faGithub;
  readonly faLinkedin = faLinkedin;
  readonly faTwitter = faXTwitter;

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }
}
