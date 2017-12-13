import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-tweet',
  templateUrl: './input-tweet.component.html',
  styleUrls: ['./input-tweet.component.css']
})
export class InputTweetComponent implements OnInit {

  constructor() { }

  public tweet: string;

  ngOnInit() {
  }

  addTweet(tweet: string, nickName: string): void {
    console.log(tweet + ' ' + nickName);
  }
}
