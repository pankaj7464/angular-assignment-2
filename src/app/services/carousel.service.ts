import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  CarouselList: Carousel[] = [
    {
      imageUrl: "https://img.freepik.com/free-photo/yellow-texture_1203-1166.jpg?w=740&t=st=1707373882~exp=1707374482~hmac=e1186fa1746c2b2499e2c47856c81bf63d21d1bb6443afe8e2ca4fe1ba68157f",
      caption:"test lorem20"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=1024x1024&w=is&k=20&c=R2zXwSRYnLX2kZt7qBUBW1eLhWL3gamnkN6HE_S2Awk=",
      caption:"test lorem20"
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1459751835/photo/european-brown-bear.jpg?s=1024x1024&w=is&k=20&c=8Pg0NEt8ObeGfgejrS4JdyerYRadhSBGmTA6TMgzfVU=",
      caption:"test lorem20"
    },
  ]
  constructor() { }

    // Method to add a new slide
    addSlide(newSlide: Carousel) {
      this.CarouselList.push(newSlide);
    }
  
    // Method to delete a slide by index
    deleteSlide(index: number) {
      if (index >= 0 && index < this.CarouselList.length) {
        this.CarouselList.splice(index, 1);
      }
    }


}
