import { Component, OnInit } from '@angular/core';

// Services
import { TweetsService } from '../../services/tweets.service';

// Models
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'app-input-tweet',
  templateUrl: './input-tweet.component.html',
  styleUrls: ['./input-tweet.component.css']
})
export class InputTweetComponent implements OnInit {

  constructor(
    private tweetsService: TweetsService
  ) { }

  public tweet: Tweet;
  private timeToDisplayTweet = 3000;

  ngOnInit() {
    const firstTweet = new Tweet(new Date(), 'To jest mój pierwszy tweet!', 'Leon');
    const secondTweet = new Tweet(new Date(), 'Świetnie Leon, będę Cie obserwować!', 'Donald');

    this.tweetsService.addTweet(firstTweet);
    setTimeout( () => {
      this.tweetsService.addTweet(secondTweet);
    }, this.timeToDisplayTweet);

  }

  addTweet(tweet: string, nickName: string) {

    this.tweet = new Tweet(new Date(), tweet, nickName);
    this.tweetsService.addTweet(this.tweet);
  }
}
