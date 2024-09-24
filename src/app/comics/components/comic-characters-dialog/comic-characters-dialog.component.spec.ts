import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCharactersDialogComponent } from './comic-characters-dialog.component';

describe('ComicCharactersDialogComponent', () => {
  let component: ComicCharactersDialogComponent;
  let fixture: ComponentFixture<ComicCharactersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicCharactersDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicCharactersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
