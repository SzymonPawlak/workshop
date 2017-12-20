import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Services
import { TweetService } from '../../services/tweet.service';

// Models
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnDestroy {

  public tweets = new Array<Tweet>();
  private subscriber: Subscription;

  constructor(private tweetsService: TweetService) {
    this.subscriber = tweetsService.tweets$.subscribe(tweets => {
      this.tweets = tweets;
    });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }
}
