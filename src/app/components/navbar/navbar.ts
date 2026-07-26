import { Component, ElementRef, AfterViewInit, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [RouterLink, NgFor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {
  private lastScrollTop = 0;

  @Input() sections: NavSection[] = [];
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
}
