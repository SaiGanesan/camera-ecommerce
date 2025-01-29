import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { NikonCameraComponent } from '../nikon-camera/nikon-camera.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nikonfinal',
  imports: [NavbarComponent,FooterComponent,NikonCameraComponent,RouterModule],
  templateUrl: './nikonfinal.component.html',
  styleUrl: './nikonfinal.component.css'
})
export class NikonfinalComponent {

}
