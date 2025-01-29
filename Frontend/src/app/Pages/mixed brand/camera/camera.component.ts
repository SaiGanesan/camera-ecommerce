import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-camera',
  imports: [FormsModule,CommonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  cameraCategories = [
    {
      name: 'Best for Fashion Photography',
      cameras: [
        { name: 'Canon EOS R5', description: 'High resolution, full-frame sensor, ideal for fashion.', image: 'assets/cameras/canon-r5.jpg' },
        { name: 'Sony A7R IV', description: 'Ultra-high resolution, great for detail in fashion shots.', image: 'assets/cameras/sony-a7r4.jpg' },
        { name: 'Nikon Z7 II', description: 'Great dynamic range and color accuracy for fashion.', image: 'assets/cameras/nikon-z7ii.jpg' },
        { name: 'Fujifilm X-T4', description: 'Compact, versatile, great for fashion shoots on the go.', image: 'assets/cameras/fujifilm-xt4.jpg' }
      ]
    },
    {
      name: 'Best for Wildlife Photography',
      cameras: [
        { name: 'Nikon D6', description: 'Fast autofocus and burst rate, great for wildlife action shots.', image: 'assets/cameras/nikon-d6.jpg' },
        { name: 'Canon EOS-1D X Mark III', description: 'Superior autofocus and speed for wildlife action.', image: 'assets/cameras/canon-eos1dx.jpg' },
        { name: 'Sony A9 II', description: 'Incredible speed and autofocus, ideal for capturing wildlife in motion.', image: 'assets/cameras/sony-a9ii.jpg' },
        { name: 'Olympus OM-D E-M1X', description: 'High-performance autofocus and portability for wildlife.', image: 'assets/cameras/olympus-omd.jpg' }
      ]
    },
    {
      name: 'Best for Landscape Photography',
      cameras: [
        { name: 'Canon EOS 5D Mark IV', description: 'Excellent low-light performance for landscape shots.', image: 'assets/cameras/canon-5dmarkiv.jpg' },
        { name: 'Sony A7R III', description: 'High resolution and dynamic range for stunning landscapes.', image: 'assets/cameras/sony-a7r3.jpg' },
        { name: 'Nikon D850', description: 'Superb image quality with high resolution, perfect for landscapes.', image: 'assets/cameras/nikon-d850.jpg' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
