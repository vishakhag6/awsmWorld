import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  public cities: string[] = ["Delhi", "Mumbai", "Agra", "Channai", "Banglore"];
}
