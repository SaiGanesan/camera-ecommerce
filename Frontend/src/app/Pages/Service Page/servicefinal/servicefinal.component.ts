import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Homepage/navbar/navbar.component';
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { ServiceComponent } from '../service/service.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicefinal',
  imports: [NavbarComponent,FooterComponent,ServiceComponent,RouterModule],
  templateUrl: './servicefinal.component.html',
  styleUrl: './servicefinal.component.css'
})
export class ServicefinalComponent {

}
