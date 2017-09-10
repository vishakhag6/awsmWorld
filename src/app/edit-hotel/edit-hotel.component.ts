import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Hotel} from '../card/card.component';
import {HotelServiceService} from '../service/hotel-service.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css'],
  providers: [HotelServiceService]
})
export class EditHotelComponent implements OnInit {
  hotel: Hotel;

  constructor(public dialogRef: MdDialogRef<EditHotelComponent>,
              @Inject(MD_DIALOG_DATA) public data: any, private hotelService: HotelServiceService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onUpdate(data) {
    //console.log(data);
    const hotels = JSON.parse(this.hotelService.getHotels()); // getting all hotels
    hotels[data.index] = data.hotel; // modifying existing hotel with modal value
    //console.log(hotels);
    localStorage.removeItem('hotels'); // removing old value
    localStorage.setItem('hotels', JSON.stringify(hotels)); // setting updated values
   // console.log(this.hotelService.getHotels());
  }
}

