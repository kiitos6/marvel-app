import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../home/toolbar/toolbar.component';
import { Comic, ComicsResponseDTO } from '../shared/models/comic';
import { ComicsService } from './service/comics.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { ScrollTopBtnComponent } from '../shared/components/scroll-top-btn/scroll-top-btn.component';
import { ComicListItemComponent } from './components/comic-list-item/comic-list-item.component';


@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [
    ToolbarComponent,
    InfiniteScrollDirective,
    ScrollTopBtnComponent,
    MatProgressSpinnerModule,
    ComicListItemComponent
  ],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.scss'
})
export class ComicsComponent implements OnInit{

  comicsList: Comic[] = [];
  // charactersSearchResultsList!: Character[];
  totalComics!: number;
  offset: number = 0;
  actualPage: number = 0;
  totalPages!: number;
  isLoading: boolean = true;

  constructor(private comicService: ComicsService) {

  }

  ngOnInit(): void {
    this.loadComics();
  }


  loadComics(): void {
    this.comicService.getComicList(this.offset).subscribe((comics: ComicsResponseDTO) => {
      this.comicsList.push(...comics.data.results);
      this.isLoading = false;
      console.log(this.comicsList);
      if(this.offset === 0) {
        this.totalComics = comics.data.total;
        this.totalPages = (this.totalComics / comics.data.count) + 1;
      }
    });
  }

  onScroll(): void {
    if(this.actualPage < this.totalPages && !this.isLoading) {
      this.isLoading = true;
      this.offset = this.offset + 20;
      this.loadComics();
    }
  }

  scrollTop(): void {
    // Safari
    document.body.scrollTop = 0;
    // Other browsers
    document.documentElement.scrollTop = 0;
  }


}
