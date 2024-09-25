import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SearchBarComponent,
    MatMenuModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();
  @Input() showSearchBar!: boolean;
  isMobileDevice: boolean = false;

    constructor(
      private router: Router,
      private responsive: BreakpointObserver
    ) { }
    
  ngOnInit(): void {
    this.initBreakpointListener();
  }

  private initBreakpointListener(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isMobileDevice = result.matches ? true : false;
      });

  }


  searchCharacters(value: string): void {
    this.searchValue.emit(value)
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
  goToComics(): void {
    this.router.navigate(['/comics']);

  }

}
