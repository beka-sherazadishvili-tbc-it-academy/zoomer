import { Component, Input } from '@angular/core';
import { Banner } from '../../models/banner.model';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss'],
})
export class BannerItemComponent {
  @Input() banner: Banner;
  isLargeBanner: boolean = false;


}
