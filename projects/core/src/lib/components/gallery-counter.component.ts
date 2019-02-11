import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryState } from '../models/gallery.model';

@Component({
  selector: 'gallery-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="state" class="g-counter">
      {{ state.currIndex + 1 + "/" + state.items.length }}
    </div>
  `
})
export class GalleryCounterComponent {
  @Input() state: GalleryState;
}
