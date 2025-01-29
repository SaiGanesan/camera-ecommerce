import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../carousel/carousel.component';
import { ContactComponent } from '../contact/contact.component';
import { DescrptionComponentComponent } from '../descrption-component/descrption-component.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PhotoTypeComponent } from '../photo-type/photo-type.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,CarouselComponent,ContactComponent,DescrptionComponentComponent,FeedbackComponent,FooterComponent,NavbarComponent,PhotoTypeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
