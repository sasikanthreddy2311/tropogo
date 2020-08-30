import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TropogoCourseDetailsComponent } from './tropogo-course-details/tropogo-course-details.component';
import { TropogoTrainingDetailsComponent } from './tropogo-training-details/tropogo-training-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/trainingDetails', pathMatch: 'full' },
  { path: 'trainingDetails', component: TropogoTrainingDetailsComponent },
  { path: 'courseDetails', component: TropogoCourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }