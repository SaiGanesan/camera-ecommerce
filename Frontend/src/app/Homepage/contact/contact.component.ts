import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    address: '123 Cyber Avenue, Pixel City, CP 560001',
    phone: '+1-800-PIXEL-01',
    email: 'support@pixelperfect.com',
  };

  socialMedia = [
    { name: 'Facebook', link: 'https://facebook.com/pixelperfect', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', link: 'https://instagram.com/pixelperfect', icon: 'fab fa-instagram' },
    { name: 'Twitter', link: 'https://twitter.com/pixelperfect', icon: 'fab fa-twitter' },
  ];

  services = [
    'Product Inquiries',
    'Technical Support',
    'Sales Assistance',
    'Feedback & Complaints',
  ];


}
