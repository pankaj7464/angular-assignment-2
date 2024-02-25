import { Component, HostListener } from '@angular/core';
import { Carousel } from '../../models/carousel.interface';
import { CarouselService } from '../../services/carousel.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  slides: Carousel[] = this.carouselService.CarouselList;
  activeSlideIndex = 0;

  constructor(private carouselService: CarouselService) {}


  /**
    Listens for keyboard events and triggers navigation when the left or right arrow keys are pressed.
    @param event - the keyboard event
  */
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.navigateBackward();
    } else if (event.key === 'ArrowRight') {
      this.navigateForward();
    }
  }

  
  /**
  navigates to the previous slide in the carousel
  */
  navigateBackward() {
    if (this.activeSlideIndex === 0) {
      this.activeSlideIndex = this.slides.length - 1;
    } else {
      this.activeSlideIndex--;
    }
  }

  /**
  navigates to the next slide in the carousel
  */
  navigateForward() {
    if (this.activeSlideIndex === this.slides.length - 1) {
      this.activeSlideIndex = 0;
    } else {
      this.activeSlideIndex++;
    }
  }
}
