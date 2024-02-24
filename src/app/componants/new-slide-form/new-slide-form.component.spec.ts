import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSlideFormComponent } from './new-slide-form.component';

describe('NewSlideFormComponent', () => {
  let component: NewSlideFormComponent;
  let fixture: ComponentFixture<NewSlideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSlideFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSlideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
