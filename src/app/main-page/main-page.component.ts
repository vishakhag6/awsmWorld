import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddHotelComponent} from '../add-hotel/add-hotel.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  addHotelModal(): void {
    let dialogRef = this.dialog.open(AddHotelComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


