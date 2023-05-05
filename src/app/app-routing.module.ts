import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { BuildProgressComponent } from './build-progress/build-progress.component';
import { HomeComponent } from './home/home.component';
import { OurBeersComponent } from './our-beers/our-beers.component';
import { FoodComponent } from './food/food.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'our-beers', component: OurBeersComponent },
  { path: 'food', component: FoodComponent},
  { path: 'upcoming-events', component: UpcomingEventsComponent },
  { path: 'build-progress', component: BuildProgressComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
