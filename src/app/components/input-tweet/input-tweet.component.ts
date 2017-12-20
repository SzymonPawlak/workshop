import { Component, OnInit } from '@angular/core';

// Services
import { TweetService } from '../../services/tweet.service';

// Models
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'app-input-tweet',
  templateUrl: './input-tweet.component.html',
  styleUrls: ['./input-tweet.component.css']
})
export class InputTweetComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  public tweet: string;

  ngOnInit() {
  }

  addTweet(tweet: string, nickName: string): void {
    this.tweetService.addTweet({
      tweet: tweet,
      nickName: nickName,
      date: new Date()
    });
  }
}
