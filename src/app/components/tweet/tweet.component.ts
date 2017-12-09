import { Component, OnInit, Input } from '@angular/core';

interface Tweet {
  date: Date;
  tweet: string;
  nickName: string;
}

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor() { }

  @Input() tweet: Tweet;

  ngOnInit() {
  }

}
