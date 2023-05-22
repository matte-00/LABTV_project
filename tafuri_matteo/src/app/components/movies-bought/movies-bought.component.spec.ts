import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBoughtComponent } from './movies-bought.component';

describe('MoviesBoughtComponent', () => {
  let component: MoviesBoughtComponent;
  let fixture: ComponentFixture<MoviesBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
