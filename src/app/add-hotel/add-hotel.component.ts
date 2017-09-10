import {Component, OnInit} from '@angular/core';
import {Hotel} from '../card/card.component';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotel: Hotel;

  constructor() {}

  ngOnInit() {
    this.hotel = {
      name: '',
      description: '',
      id: null
    };
  }

  addHotel() {
    if (this.hotel.name || this.hotel.description) {
      // Generate id
      const allHotels = JSON.parse(localStorage.getItem('hotels'));
      this.hotel.id = allHotels.length + 1;
      //  Set new hotel
      allHotels.push(this.hotel);
      localStorage.removeItem('hotels');
      localStorage.setItem('hotels', JSON.stringify(allHotels));
      location.reload();
    }
  }
}
