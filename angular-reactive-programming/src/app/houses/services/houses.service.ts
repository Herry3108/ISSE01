import { Injectable } from '@angular/core';
import { HouseInterface } from '../types/house.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  houses: HouseInterface[] = [
    {
      "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
      "name": "Gryffindor",
      "founder": "Godric Gryffindor",
      "element": "Fire"
    },
    {
      "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
      "name": "Ravenclaw",
      "founder": "Rowena Ravenclaw",
      "element": "Air"
    },
    {
      "id": "85af6295-fd01-4170-a10b-963dd51dce14",
      "name": "Hufflepuff",
      "founder": "Helga Hufflepuff",
      "element": "Earth"
    },
    {
      "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
      "name": "Slytherin",
      "founder": "Salazar Slytherin",
      "element": "Water"
    }
  ];
  

  
  getHouses(): Observable<HouseInterface[]> {
    return of(this.houses).pipe(delay(2000));
  }
}
