import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lens',
  imports: [FormsModule,CommonModule],
  templateUrl: './lens.component.html',
  styleUrl: './lens.component.css'
})
export class LensComponent {
  lensCategories = [
    {
      name: 'Wide-Angle Lenses',
      lenses: [
        { name: 'Canon EF 16-35mm f/2.8L III', description: 'Ideal for landscapes and architecture.', image: 'assets/lenses/canon-16-35mm.jpg' },
        { name: 'Nikon AF-S 14-24mm f/2.8G', description: 'Perfect for wide-angle shots with high image quality.', image: 'assets/lenses/nikon-14-24mm.jpg' },
        { name: 'Sony FE 16-35mm f/2.8 GM', description: 'Versatile lens for landscapes and architectural shots.', image: 'assets/lenses/sony-16-35mm.jpg' },
        { name: 'Tamron 15-30mm f/2.8', description: 'A great choice for wide-angle shots with sharp images.', image: 'assets/lenses/tamron-15-30mm.jpg' }
      ]
    },
    {
      name: 'Macro Lenses',
      lenses: [
        { name: 'Canon EF 100mm f/2.8L Macro IS USM', description: 'Perfect for close-up photography with detailed shots.', image: 'assets/lenses/canon-100mm-macro.jpg' },
        { name: 'Sony FE 90mm f/2.8 Macro G OSS', description: 'Great for capturing extreme close-ups with clarity.', image: 'assets/lenses/sony-90mm-macro.jpg' },
        { name: 'Nikon AF-S 105mm f/2.8G', description: 'Ideal for sharp close-up and macro shots.', image: 'assets/lenses/nikon-105mm-macro.jpg' },
        { name: 'Sigma 105mm f/2.8 EX DG OS HSM', description: 'Macro lens with optical stabilization for detailed images.', image: 'assets/lenses/sigma-105mm-macro.jpg' }
      ]
    },
    {
      name: 'Telephoto Lenses',
      lenses: [
        { name: 'Canon RF 70-200mm f/2.8L IS USM', description: 'A versatile lens ideal for wildlife and sports photography.', image: 'assets/lenses/canon-70-200mm.jpg' },
        { name: 'Nikon AF-S 70-200mm f/2.8E FL ED VR', description: 'Excellent telephoto zoom lens for sports and wildlife.', image: 'assets/lenses/nikon-70-200mm.jpg' },
        { name: 'Sony FE 70-200mm f/2.8 GM OSS', description: 'Versatile lens for wildlife and action shots with great quality.', image: 'assets/lenses/sony-70-200mm.jpg' },
        { name: 'Tamron 70-200mm f/2.8 Di VC USD', description: 'Affordable option for telephoto shots with great results.', image: 'assets/lenses/tamron-70-200mm.jpg' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
