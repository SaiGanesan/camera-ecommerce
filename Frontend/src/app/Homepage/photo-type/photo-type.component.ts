import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-type',
  imports: [CommonModule,FormsModule],
  templateUrl: './photo-type.component.html',
  styleUrls: ['./photo-type.component.css']
})
export class PhotoTypeComponent {
  photographyTypes = [
    {
      type: 'Wildlife Photography',
      image: 'assets/wildlife-icon.png',
      description:
        'Capture the beauty of nature with high-speed shooting and incredible zoom capabilities.',
      features: [
        'Fast continuous shooting (10+ FPS)',
        'Advanced telephoto lenses for distant subjects',
        'Rugged, weather-sealed bodies for outdoor conditions',
      ],
    },
    {
      type: 'Travel Photography',
      image: 'assets/travel-icon.png',
      description:
        'Perfect for travelers seeking lightweight, versatile cameras for capturing memories.',
      features: [
        'Compact, lightweight designs',
        'Built-in Wi-Fi and GPS for instant sharing and geo-tagging',
        'Wide-angle lenses for stunning landscapes',
      ],
    },
    {
      type: 'Fashion Photography',
      image: 'assets/fashion-icon.png',
      description:
        'Designed for studio shoots and on-location portraits with exceptional detail.',
      features: [
        'Full-frame sensors for vibrant colors and sharp details',
        'High-resolution cameras (30+ MP)',
        'Portrait lenses with beautiful bokeh effects',
      ],
    },
    {
      type: 'Sports Photography',
      image: 'assets/sports-icon.png',
      description:
        'Ideal for fast-paced action shots with precise autofocus and rapid shooting.',
      features: [
        'High-speed autofocus tracking',
        'Burst shooting up to 20+ FPS',
        'Lightweight yet durable bodies for quick handling',
      ],
    },
  ];
}
