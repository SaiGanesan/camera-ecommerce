import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { SignupComponent } from '../signup/signup.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signupfinal',
  imports: [NavbarComponent,SignupComponent,FooterComponent,RouterModule],
  templateUrl: './signupfinal.component.html',
  styleUrl: './signupfinal.component.css'
})
export class SignupfinalComponent {

}
