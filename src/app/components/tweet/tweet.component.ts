import { Component, Input } from '@angular/core';

// Models
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {

  constructor() { }

  @Input() tweet: Tweet;
}
