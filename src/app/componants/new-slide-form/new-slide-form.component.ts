import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarouselService } from '../../services/carousel.service';
@Component({
  selector: 'app-new-slide-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-slide-form.component.html',
  styleUrl: './new-slide-form.component.scss'
})
export class NewSlideFormComponent {
  slideForm!: FormGroup; // Use ! to indicate that this property will be initialized later

  constructor(private formBuilder: FormBuilder,private carouselService:CarouselService) { }

  ngOnInit(): void {
    this.initForm();
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
      // Process your form submission here
      this.carouselService.addSlide(this.slideForm.value)
      console.log( this.carouselService)
     
    }
  }
}
