import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideosComponent} from "./videos/videos.component";

const routes: Routes = [
  {path: '', component: VideosComponent},
  {path: 'search/:searchTerm', component: VideosComponent},
  {path: 'tag/:tag', component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
