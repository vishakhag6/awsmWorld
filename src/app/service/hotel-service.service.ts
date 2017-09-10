import {Injectable} from '@angular/core';
import {Hotel} from '../card/card.component';

@Injectable()
export class HotelServiceService {

  hotels: Hotel[];
  
  constructor() {
    this.hotels = [
      {id: 1, name: 'Le Pondy', description: 'Stay for 2 in a Choice of Room with Breakfast'},
      {id: 2, name: 'Sahara Star Hotel', description: 'Weekend Couple Stay with Choice of Rooms with Meals'},
      {id: 3, name: 'Hill Top Swiss Cottage', description: 'Stay for up to 5 in Choice of Rooms with Breakfast'},
      {id: 4, name: 'Deltin Suites Hotel', description: 'Stay for 2 in a choice of rooms with breakfast & free entry into Hotel Casino'},
      {id: 5, name: 'The Golden Days Club 2', description: 'Stay in a Deluxe Room with Meals'}
    ];
  }

  // removeHotels(): void {
  //   localStorage.removeItem('hotels');
  // }

  getHotels() {
    return localStorage.getItem('hotels');
  }

  setHotels(hotels: Hotel[]) {
    localStorage.setItem('hotels', JSON.stringify(hotels));
  }

  initHotels() {

    console.log("initializing hotels");
    if (!JSON.parse(localStorage.getItem('hotelsAdded')) === true) {
      console.log("initializing hotels for the first time");
      // Add hotels
      localStorage.setItem('hotels', JSON.stringify(this.hotels));

      // Set boolean true
      localStorage.setItem('hotelsAdded', JSON.stringify(true)); // true hoga toh hotels add nhi hoga
    }

    else {
      console.log("hotels are already added");
    }
  }
}
