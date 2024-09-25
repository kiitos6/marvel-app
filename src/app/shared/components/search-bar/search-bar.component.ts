import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output() searchValue = new EventEmitter<string>();
  debouncer: Subject<string> = new Subject<string>();

  value: string = '';
  width: number = 250;


  constructor(
    private responsive: BreakpointObserver
  ) {
    this.debouncer
      .pipe(debounceTime(2000))
      .subscribe((value) => this.searchValue.emit(value));
  }

  ngOnInit(): void {
    this.initBreakpointListener();
  }

  private initBreakpointListener(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.width = result.matches ? 180 : 250;
      });

  }

  onKeyUp(): void {
    this.debouncer.next(this.value);
  }

  restartSearch(): void {
    this.value = '';
    this.debouncer.next(this.value);
  }

}
