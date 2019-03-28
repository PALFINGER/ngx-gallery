import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-doc-gallerize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './doc-gallerize.component.html',
  styleUrls: ['./doc-gallerize.component.scss']
})
export class DocGallerizeComponent {

  docs = `import { GalleryModule } from  'ngx-gallery2-core';
import { LightboxModule } from  'ngx-gallery2-lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';

@NgModule({
  imports: [
    GalleryModule,
    GalleryLightbox,
    GallerizeModule
  ]
})`;

}
