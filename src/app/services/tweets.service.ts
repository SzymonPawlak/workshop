import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

// Models
import { Tweet } from '../models/tweet.model';

@Injectable()
export class TweetsService {

  constructor (private http: HttpClient) {}

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

  getTweet() {
    this.http.get('http://demo0540732.mockable.io/tweets').subscribe( data => {
      console.log(data);
    });
  }
}
