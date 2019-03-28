import { NgModule } from '@angular/core';
import { GalleryModule } from 'ngx-gallery2-core';
import { LightboxModule } from 'ngx-gallery2-lightbox';
import { GallerizeDirective } from './gallerize.directive';

@NgModule({
  imports: [
    GalleryModule,
    LightboxModule
  ],
  declarations: [GallerizeDirective],
  exports: [GallerizeDirective]
})
export class GallerizeModule {

}
