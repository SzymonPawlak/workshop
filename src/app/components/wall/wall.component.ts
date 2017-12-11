import { Component, OnInit } from '@angular/core';

// Services
import { TweetsService } from '../../services/tweets.service';

// Models
import { Tweet } from '../../models/tweet.model';

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
