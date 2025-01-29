import { Component } from '@angular/core';
import { CameraComponent } from '../camera/camera.component';
import { LensComponent } from '../lens/lens.component';
import { BrandHeaderComponent } from '../brand-header/brand-header.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewall',
  imports: [CameraComponent,LensComponent,BrandHeaderComponent,FooterComponent,NavbarComponent,RouterModule],
  templateUrl: './viewall.component.html',
  styleUrl: './viewall.component.css'
})
export class ViewallComponent {

}
