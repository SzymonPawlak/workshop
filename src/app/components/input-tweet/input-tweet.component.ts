import { Component, OnInit } from '@angular/core';

// Services
import { TweetsService } from '../../services/tweets.service';

interface Tweet {
  date: Date;
  tweet: string;
  nickName: string;
}

@Component({
  selector: 'app-input-tweet',
  templateUrl: './input-tweet.component.html',
  styleUrls: ['./input-tweet.component.css']
})
export class InputTweetComponent {

  constructor(
    private tweetsService: TweetsService
  ) { }

  private tweet: Tweet;

  addTweet(tweet: string, nickName: string) {

    this.tweet = {
        date: new Date(),
        tweet: tweet,
        nickName: nickName
    };

    this.tweetsService.addTweet(this.tweet);
  }
}
