import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  CarouselList: Carousel[] = [
    {
      imageUrl:
        'https://img.freepik.com/free-photo/yellow-texture_1203-1166.jpg?w=740&t=st=1707373882~exp=1707374482~hmac=e1186fa1746c2b2499e2c47856c81bf63d21d1bb6443afe8e2ca4fe1ba68157f',
      caption: 'test lorem 1',
    },
    {
      imageUrl:
        'https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=1024x1024&w=is&k=20&c=R2zXwSRYnLX2kZt7qBUBW1eLhWL3gamnkN6HE_S2Awk=',
      caption: 'test lorem 2',
    },
    {
      imageUrl:
        'https://media.istockphoto.com/id/1459751835/photo/european-brown-bear.jpg?s=1024x1024&w=is&k=20&c=8Pg0NEt8ObeGfgejrS4JdyerYRadhSBGmTA6TMgzfVU=',
      caption: 'test lorem 3',
    },
  ];
  constructor() {}

  
  /**
   * Adds a new slide to the end of the carousel.
   * @param newSlide - The new slide to add.
   */
  addSlide(newSlide: Carousel): void {
    this.CarouselList.push(newSlide);
  }

  /**
   * Deletes the slide at the specified index from the list.
   * @param index - The zero-based index of the slide to delete.
   */
  deleteSlide(index: number): void {
    if (index >= 0 && index < this.CarouselList.length) {
      this.CarouselList.splice(index, 1);
    }
  }
}
