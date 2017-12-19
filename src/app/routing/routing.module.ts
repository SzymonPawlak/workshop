import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TwiiterComponent } from '../pages/twiiter/twiiter.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: TwiiterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
