import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglePlaylistPage } from './single-playlist.page';

describe('SinglePlaylistPage', () => {
  let component: SinglePlaylistPage;
  let fixture: ComponentFixture<SinglePlaylistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

