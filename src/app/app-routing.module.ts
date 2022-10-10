import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { BuildProgressComponent } from './build-progress/build-progress.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'upcoming-events', component: UpcomingEventsComponent},
  { path: 'build-progress', component: BuildProgressComponent},
  { path: 'blog', component: BlogComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
