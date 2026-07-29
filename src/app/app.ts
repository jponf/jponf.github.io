import { Component, signal } from '@angular/core';

import { Navbar, NavSection } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Presentation } from './sections/presentation/presentation';
import { AboutSection } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Publications } from './sections/publications/publications';
import { Software } from './sections/software/software';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Presentation, AboutSection, Skills, Publications, Software, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jponf-portfolio');
  protected navbarHeight = signal(0);

  protected readonly sections: NavSection[] = [
    { id: AboutSection.sectionId, label: AboutSection.sectionLabel },
    { id: Skills.sectionId, label: Skills.sectionLabel },
    { id: Publications.sectionId, label: Publications.sectionLabel },
    { id: Software.sectionId, label: Software.sectionLabel },
    { id: Contact.sectionId, label: Contact.sectionLabel },
  ];
}
