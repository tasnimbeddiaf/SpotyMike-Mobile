import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaySongsPage } from './play-songs.page';

describe('PlaySongsPage', () => {
  let component: PlaySongsPage;
  let fixture: ComponentFixture<PlaySongsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
