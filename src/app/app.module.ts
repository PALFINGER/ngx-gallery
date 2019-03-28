import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { GalleryModule } from 'ngx-gallery2-core';
import { LightboxModule } from 'ngx-gallery2-lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { HomeComponent } from './home/home.component';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
