import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GallerizeExampleComponent } from './gallerize-example.component';

import { GalleryModule } from 'ngx-gallery2-core';
import { LightboxModule } from 'ngx-gallery2-lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

@NgModule({
  declarations: [
    GallerizeExampleComponent
  ],
  imports: [
    SharedModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    RouterModule.forChild([
      {
        path: '', component: GallerizeExampleComponent
      }
    ])
  ]

})
export class GallerizeExampleModule { }
