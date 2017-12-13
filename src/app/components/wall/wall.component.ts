import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent {

  public tweets = [
    'tweet1',
    'tweet2',
    'tweet3'
  ];

  constructor() { }

}
