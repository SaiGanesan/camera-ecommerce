import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { CanonComponent } from '../canon/canon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-canonfinal',
  imports: [NavbarComponent,FooterComponent,CanonComponent,RouterModule],
  templateUrl: './canonfinal.component.html',
  styleUrl: './canonfinal.component.css'
})
export class CanonfinalComponent {

}
