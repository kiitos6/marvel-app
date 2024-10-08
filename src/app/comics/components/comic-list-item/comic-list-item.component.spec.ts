import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListItemComponent } from './comic-list-item.component';

describe('ComicListItemComponent', () => {
  let component: ComicListItemComponent;
  let fixture: ComponentFixture<ComicListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
