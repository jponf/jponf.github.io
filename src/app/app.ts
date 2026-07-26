import { Component, signal } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Presentation } from './sections/presentation/presentation';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Presentation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jponf-portfolio');
  protected navbarHeight = signal(0);
}
