import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signinfinal',
  imports: [SigninComponent,NavbarComponent,FooterComponent,RouterModule],
  templateUrl: './signinfinal.component.html',
  styleUrl: './signinfinal.component.css'
})
export class SigninfinalComponent {

}
