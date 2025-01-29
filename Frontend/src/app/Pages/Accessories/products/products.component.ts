import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  catalogProducts = [
    {
      name: 'Camera Lens',
      price: 2500,
      image: 'assets/products/lens.jpg'
    },
    {
      name: 'Tripod Stand',
      price: 1500,
      image: 'assets/products/tripod.jpg'
    },
    {
      name: 'Camera Bag',
      price: 1200,
      image: 'assets/products/camera-bag.jpg'
    },
    {
      name: 'Memory Card',
      price: 500,
      image: 'assets/products/memory-card.jpg'
    },
    {
      name: 'Battery Charger',
      price: 800,
      image: 'assets/products/battery-charger.jpg'
    },
    {
      name: 'Remote Control',
      price: 700,
      image: 'assets/products/remote.jpg'
    },
    {
      name: 'Lens Cleaning Kit',
      price: 300,
      image: 'assets/products/cleaning-kit.jpg'
    },
    {
      name: 'Camera Strap',
      price: 400,
      image: 'assets/products/strap.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
