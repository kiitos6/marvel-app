import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SearchBarComponent,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Output() searchValue = new EventEmitter<string>();
  @Input() showSearchBar!: boolean;

    constructor(private router: Router) {

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
