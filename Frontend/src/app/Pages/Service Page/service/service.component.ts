import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  serviceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cameraBrand: ['', Validators.required],
      issue: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm(): void {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      console.log('Service Request Submitted:', formData);
      alert('Your service request has been submitted successfully!');
      this.serviceForm.reset();
    }
  }

}
