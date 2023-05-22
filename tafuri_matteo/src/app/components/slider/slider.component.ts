import { Component, Input } from '@angular/core';
import { MovieCast } from 'src/app/models/MovieCast';
import { MovieCrew } from 'src/app/models/MovieCrew';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input()
  movieDetails:Array<MovieCrew> | Array<MovieCast> = [];

}
