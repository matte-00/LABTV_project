import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularMoviesComponent } from './most-popular-movies.component';

describe('MostPopularMoviesComponent', () => {
  let component: MostPopularMoviesComponent;
  let fixture: ComponentFixture<MostPopularMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
