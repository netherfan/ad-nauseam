import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
