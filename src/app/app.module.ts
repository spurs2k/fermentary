import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { BuildProgressComponent } from './build-progress/build-progress.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OurBeersComponent } from './our-beers/our-beers.component';
import { FoodComponent } from './food/food.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingEventsComponent,
    BuildProgressComponent,
    HomeComponent,
    HeaderComponent,
    OurBeersComponent,
    FoodComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
