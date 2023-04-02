import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'allreviews', component: ReviewsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
