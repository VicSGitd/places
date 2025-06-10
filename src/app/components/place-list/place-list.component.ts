import { Component,OnDestroy,OnInit } from '@angular/core';
import Place from '../../interfaces/place.interface';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-place-list',
  imports: [CommonModule],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent implements OnInit {


  places: Place[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.placesService.getLugares().subscribe({
      next: (places) => {
        this.places = places;
      },
      error: (err) => {
        console.error('Error loading places:', err);
      }
    });
  }
    loadPlaces(): void {
    this.placesService.getLugares().subscribe({
      next: (places) => this.places = places,
      error: (err) => console.error('Error loading places:', err)
    });
  }

async deletePlace(placeId: string | undefined): Promise<void> {
  if (!placeId) {
    console.error('ID no definido');
    alert('Error: No se puede identificar el lugar a borrar');
    return;
  }

  try {
    const confirmDelete = confirm('¿Seguro que quieres eliminar este lugar?');
    if (!confirmDelete) return;
    
    await this.placesService.deletePlace(placeId);
    console.log('Lugar borrado, actualizando lista...'); // Debug
    
    // Filtramos localmente para mejor rendimiento
    this.places = this.places.filter(p => p.id !== placeId);
    
  } catch (error) {
    console.error('Error completo:', error);
    alert('No se pudo borrar el lugar. Verifica la consola para más detalles.');
  }
}

}
