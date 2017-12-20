import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// Models
import { Tweet } from '../models/tweet.model';

@Injectable()
export class TweetService {

  tweets = new Array<Tweet>();

  private tweetsSource = new Subject<Array<Tweet>>();
  tweets$ = this.tweetsSource.asObservable();

  constructor() { }

  addTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
    this.tweetsSource.next(this.tweets);
  }
}
