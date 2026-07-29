import { Component, ElementRef, AfterViewInit, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

export interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  host: {
    'class': 'navbar navbar-dark navbar-expand-lg fg-light justify-content-between'
  },
  imports: [NgFor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {
  private lastScrollTop = 0;
  private navbarHeight = 0;

  @Input() sections: NavSection[] = [];
  @Output() heightChange = new EventEmitter<number>();

  @HostBinding('class.navbar-scroll-up') scrollUp = true;
  @HostBinding('class.navbar-scroll-down') scrollDown = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.navbarHeight = this.el.nativeElement.offsetHeight;
    this.heightChange.emit(this.navbarHeight);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;

    this.scrollUp = scrollTop <= this.lastScrollTop;
    this.scrollDown = scrollTop > this.lastScrollTop;

    this.lastScrollTop = scrollTop;
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - this.navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
