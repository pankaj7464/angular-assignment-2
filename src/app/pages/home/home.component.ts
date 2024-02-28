import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../componants/carousel/carousel.component';

import { CarouselService } from '../../services/carousel.service';
import { Carousel } from '../../models/carousel.interface';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CarouselComponent, MatIconModule,ReactiveFormsModule],
})
export class HomeComponent implements OnInit {
  slides!: Carousel[];
  constructor(private formBuilder: FormBuilder,private carouselService:CarouselService) {}
  slideForm!: FormGroup; 
  
  ngOnInit(): void {
    this.initForm();
    this.slides = this.carouselService.CarouselList;
  }

  initForm() {
    this.slideForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
      caption: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.slideForm)
    if (this.slideForm.valid) {
      this.carouselService.addSlide(this.slideForm.value)
      console.log( this.carouselService)
     
    }
  }



  /**
  Deletes a slide from the carousel
  @param index - The index of the slide to delete
  */
  deleteSlide(index: number): void {
    this.carouselService.deleteSlide(index);
  }
}
