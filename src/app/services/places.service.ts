import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Place from "../interfaces/place.interface";

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    constructor(private firestore: Firestore) {}

    addPlace(lugar: Place) {
        const placesRef = collection(this.firestore, 'places');
        return addDoc(placesRef, lugar);
    }

  getLugares(): Observable<Place[]> {
    const lugaresRef = collection(this.firestore, 'places');
    return collectionData(lugaresRef, { idField: 'id' }) as Observable<Place[]>;
  }

async deletePlace(placeId: string): Promise<void> {
  try {
    console.log('Intentando borrar documento con ID:', placeId); 
    const placeDocRef = doc(this.firestore, `places/${placeId}`);
    console.log('Referencia al documento:', placeDocRef.path); 
    
    await deleteDoc(placeDocRef);
    console.log('Documento borrado exitosamente');
  } catch (error) {
    console.error('Error en deletePlace:', error);
    throw error; 
  }
}
}