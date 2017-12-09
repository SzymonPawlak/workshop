import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

interface Tweet {
  date: Date;
  tweet: string;
  nickName: string;
}

@Injectable()
export class TweetsService {

  public tweets: Tweet[];

  private tweetsSource = new Subject<Tweet[]>();
  tweets$ = this.tweetsSource.asObservable();

  addTweet(tweet: Tweet) {
    if (this.tweets == null) {
      this.tweets = [tweet];
    } else {
      this.tweets.push(tweet);
    }
    this.tweetsSource.next(this.tweets);
  }
}
