import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { GuideComponent } from '../guide/guide.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';

@Component({
  selector: 'app-guidefinal',
  imports: [RouterModule,NavbarComponent,GuideComponent,FooterComponent],
  templateUrl: './guidefinal.component.html',
  styleUrl: './guidefinal.component.css'
})
export class GuidefinalComponent {

}
