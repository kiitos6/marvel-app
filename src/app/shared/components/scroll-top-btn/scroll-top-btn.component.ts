import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-top-btn',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './scroll-top-btn.component.html',
  styleUrl: './scroll-top-btn.component.scss'
})
export class ScrollTopBtnComponent {

  @Output() scrollToTop = new EventEmitter<string>();
  showGoUpButton: boolean = false;
  showScrollHeight = 400;
  hideScrollHeight = 200;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  scrollTop(): void {
    this.scrollToTop.emit();
  }

}
