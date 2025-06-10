import { Component,OnInit } from '@angular/core';
import Place from '../../interfaces/place.interface';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps'
@Component({
  selector: 'app-place-map',
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './place-map.component.html',
  styleUrl: './place-map.component.css'
})
export class PlaceMapComponent{



}
