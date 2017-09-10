import {Component, OnInit, Input} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {EditHotelComponent} from '../edit-hotel/edit-hotel.component';
import {HotelServiceService} from '../service/hotel-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HotelServiceService]
})
export class CardComponent implements OnInit {
  hotels: Hotel[]; // group of hotels 
  hotel: Hotel; // single entitly

  constructor(public dialog: MdDialog, private hotelService: HotelServiceService) {
    // Set initial hotels
    hotelService.initHotels();

    this.hotels = JSON.parse(hotelService.getHotels());
  }

  ngOnInit() {
  }

  deleteItem(hotel, index) {
    this.hotels.splice(index, 1);
    localStorage.removeItem('hotels');
    //this.hotelService.removeHotels();
    //this.hotelService.setHotels(this.hotels);
    localStorage.setItem('hotels', JSON.stringify(this.hotels));
  }

  onEdit(hotel, index): void {
    const hotelData = {
      hotel: hotel,
      index: index
    };

    const dialogRef = this.dialog.open(EditHotelComponent, {
      width: '500px',
      data: hotelData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.hotel = result;
    });

  }
}

export interface Hotel {
  id: number;
  name: string;
  description: string;
}
