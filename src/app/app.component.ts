import { Component } from '@angular/core';

import { NewPlaceComponent } from './components/new-place/new-place.component';
import { PlaceListComponent } from './components/place-list/place-list.component';

@Component({
  selector: 'app-root',
  imports: [NewPlaceComponent,PlaceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'places';
}
