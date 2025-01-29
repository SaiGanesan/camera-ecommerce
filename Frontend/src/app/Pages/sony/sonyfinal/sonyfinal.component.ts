import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { SonyComponent } from '../sony/sony.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sonyfinal',
  imports: [NavbarComponent,SonyComponent,FooterComponent,RouterModule],
  templateUrl: './sonyfinal.component.html',
  styleUrl: './sonyfinal.component.css'
})
export class SonyfinalComponent {

}
