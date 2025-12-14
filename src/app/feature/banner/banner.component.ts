import { Component, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Banner } from './models/banner.model';
import { BannerService } from './services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  banners$: Observable<Banner[]>;
  currentSlide: number = 0;

  constructor(private readonly bannerService: BannerService) {}

  ngOnInit(): void {
    this.getBanners();
  }

  changeSlide(slideNum: number, bannerLength: number) {
    if (
      (this.currentSlide === 0 && slideNum === -1) ||
      (this.currentSlide + 1 === bannerLength && slideNum === 1)
    ) {
      return;
    } else if (slideNum === 1) {
      this.currentSlide++;
    } else if (slideNum === -1) {
      console.log(this.currentSlide)
      this.currentSlide--;
    }
  }

  getBanners(): void {
    this.banners$ = this.bannerService
      .getBanners()
      .pipe(tap((banner) => console.log(banner)));
  }
}
