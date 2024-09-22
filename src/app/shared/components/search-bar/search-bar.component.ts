import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output() searchValue = new EventEmitter<string>();
  debouncer: Subject<string> = new Subject<string>();

  value: string = '';

  constructor() {
    this.debouncer
      .pipe(debounceTime(2000))
      .subscribe((value) => this.searchValue.emit(value));
  }

  onKeyUp(): void {
    this.debouncer.next(this.value);
  }

  restartSearch(): void {
    this.value = '';
    this.debouncer.next(this.value);

  }

}
