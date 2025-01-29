import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbacks = [
    {
      name: 'John Doe',
      feedback: 'Amazing camera quality! The service was outstanding and the staff was very helpful.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      feedback: 'I found the perfect travel camera here. Lightweight, versatile, and great customer support.',
      rating: 4,
    },
    {
      name: 'Alex Johnson',
      feedback: 'Highly recommend this store for wildlife photography equipment. The gear is top-notch!',
      rating: 5,
    },
  ];

  newFeedback = {
    name: '',
    feedback: '',
    rating: 0,
  };

  addFeedback() {
    if (this.newFeedback.name && this.newFeedback.feedback && this.newFeedback.rating > 0) {
      this.feedbacks.push({ ...this.newFeedback });
      this.newFeedback = { name: '', feedback: '', rating: 0 }; // Reset form
    }
  }
}
