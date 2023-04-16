import { Book } from 'src/app/models/book.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReviewCardComponent } from './shared/review-card/review-card.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { BookBuilderComponent } from './components/book-builder/book-builder.component';
import { LoginComponent } from './components/user/login/login.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'allbooks', component: BookCardComponent, children: [
    {path: 'newbook', component: BookBuilderComponent}
  ]},
  {path: 'allreviews', component: ReviewCardComponent},
  {path: 'reviewdetail', component: ReviewDetailComponent},
  {path: 'bookdetail', component: BookDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
