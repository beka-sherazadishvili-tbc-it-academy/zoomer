import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';


@NgModule({
  declarations: [
    BannerComponent,
    BannerItemComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
