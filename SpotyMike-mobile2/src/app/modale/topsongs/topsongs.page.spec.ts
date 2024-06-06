import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopsongsPage } from './topsongs.page';

describe('TopsongsPage', () => {
  let component: TopsongsPage;
  let fixture: ComponentFixture<TopsongsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
