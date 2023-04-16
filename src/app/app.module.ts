import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from "primeng/password";
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ReviewCardComponent } from './shared/review-card/review-card.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsListComponent } from './components/reviews/reviews-list/reviews-list.component';
import { DetailComponent } from './components/reviews/detail/detail.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { BookBuilderComponent } from './components/book-builder/book-builder.component';
import { LoginComponent } from './components/user/login/login.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

// import { ReviewsComponent } from './components/reviews/reviews.component';
// import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
// import { DropdownModule } from 'primeng/dropdown';
// import { RatingModule } from 'primeng/rating';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    ReviewCardComponent,
    ReviewsComponent,
    ReviewsListComponent,
    DetailComponent,
    BookCardComponent,
    BookBuilderComponent,
    LoginComponent,
    ReviewDetailComponent,
    BookDetailComponent
    // ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule,
    PaginatorModule,
    PasswordModule,
    // CKEditorModule
    // DataViewModule,
    // DropdownModule,
    // RatingModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
