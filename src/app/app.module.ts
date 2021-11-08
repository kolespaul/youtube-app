import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    InputComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
