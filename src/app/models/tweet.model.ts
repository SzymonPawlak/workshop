export class Tweet {
    date: Date;
    tweet: string;
    nickName: string;

    constructor(
        date: Date,
        tweet: string,
        nickName: string,
      ) {
          this.date = date;
          this.tweet = tweet;
          this.nickName = nickName;
      }
}

