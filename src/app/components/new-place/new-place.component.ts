import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-new-place',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css'],
  standalone:true
})
export class NewPlaceComponent  implements OnInit {


  formulario: FormGroup;

  constructor(private placesService: PlacesService) {
    this.formulario = new FormGroup({
      name: new FormControl('', Validators.required),
      latitude: new FormControl(null, Validators.required),
      longitude: new FormControl(null, Validators.required),
      description: new FormControl(''),
      image: new FormControl('')
    });
  }

  ngOnInit(): void {
    console.log('Componente cargado');
  }

  async onSubmit() {
    if (this.formulario.invalid) {
      console.warn('Formulario inválido');
      this.formulario.markAllAsTouched();
      return;
    }

    try {
      console.log('Enviando lugar:', this.formulario.value);
      const res = await this.placesService.addPlace(this.formulario.value);
      console.log('Lugar agregado:', res);
      this.formulario.reset();
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
    }
  }

}
