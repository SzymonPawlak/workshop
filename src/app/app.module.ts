import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { WallComponent } from './components/wall/wall.component';
import { InputTweetComponent } from './components/input-tweet/input-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';

// Servics
import { TweetsService } from './services/tweets.service';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    InputTweetComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
