import { Component } from '@angular/core';
import { Carousel } from '../../models/carousel.interface';
import { CarouselService } from '../../services/carousel.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
hide: any;
  constructor(private carouselService:CarouselService){}

  slides:Carousel[] =this.carouselService.CarouselList;

  activeSlideIndex = 0;
  navigateBackward() {
    console.log(this.slides)
    if (this.activeSlideIndex === 0) {
      this.activeSlideIndex = this.slides.length - 1;
    } else {
      this.activeSlideIndex--;
    }
  }
  

  navigateForward() {
    if (this.activeSlideIndex === this.slides.length - 1) {
      this.activeSlideIndex = 0;
    } else {
      this.activeSlideIndex++;
      
    }
  }
}
