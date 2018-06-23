import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { WallComponent } from './components/wall/wall.component';
import { InputTweetComponent } from './components/input-tweet/input-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';

// Servics
import { TweetsService } from './services/tweets.service';
import { TwiiterComponent } from './pages/twiiter/twiiter.component';

// Routing
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    InputTweetComponent,
    TweetComponent,
    TwiiterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    TweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
