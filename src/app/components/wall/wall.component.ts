import { Component, OnInit } from '@angular/core';

import { TweetsService } from '../../services/tweets.service';

interface Tweet {
  date: Date;
  tweet: string;
  nickName: string;
}

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  public tweets: Tweet[];

  constructor(
    tweetsService: TweetsService
  ) {
    tweetsService.tweets$.subscribe(
        tweets => {
          this.tweets = tweets;
        });
  }

  ngOnInit() {
  }

}
