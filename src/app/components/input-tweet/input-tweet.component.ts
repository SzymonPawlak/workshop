import { Component, OnInit } from '@angular/core';

// Services
import { TweetsService } from '../../services/tweets.service';

// Models
import { Tweet } from '../../models/tweet.model';

interface InputData {
  tweet: string;
  nickName: string;
}

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
  public inputData: InputData = {
    tweet: '',
    nickName: ''
  };
  private timeToDisplayTweet = 3000;

  ngOnInit() {
    this.tweetsService.getTweet();
    const firstTweet = new Tweet(new Date(), 'To jest mój pierwszy tweet!', 'Leon');

    this.tweetsService.addTweet(firstTweet);
    setTimeout( () => {
      const secondTweet = new Tweet(new Date(), 'Świetnie Leon, będę Cie obserwować!', 'Donald');
      this.tweetsService.addTweet(secondTweet);
    }, this.timeToDisplayTweet);

  }

  onSubmit(formInputs: InputData) {

    this.tweet = new Tweet(new Date(), formInputs.tweet, formInputs.nickName);
    this.tweetsService.addTweet(this.tweet);
  }
}
