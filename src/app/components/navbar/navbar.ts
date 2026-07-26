import { Component, ElementRef, AfterViewInit, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: {
    'class': 'navbar navbar-dark navbar-expand-lg fg-light justify-content-between'
  },
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {
  private lastScrollTop = 0;

  @Output() heightChange = new EventEmitter<number>();

  @HostBinding('class.navbar-scroll-up') scrollUp = true;
  @HostBinding('class.navbar-scroll-down') scrollDown = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.heightChange.emit(this.el.nativeElement.offsetHeight);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;

    this.scrollUp = scrollTop <= this.lastScrollTop;
    this.scrollDown = scrollTop > this.lastScrollTop;

    this.lastScrollTop = scrollTop;
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
