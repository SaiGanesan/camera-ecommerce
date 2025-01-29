import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { CartComponent } from '../cart/cart.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cartfinal',
  imports: [NavbarComponent,CartComponent,FooterComponent,RouterModule],
  templateUrl: './cartfinal.component.html',
  styleUrl: './cartfinal.component.css'
})
export class CartfinalComponent {

}
