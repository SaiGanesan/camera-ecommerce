import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category/category.component';
import { FeaturedComponent } from '../featured/featured.component';
import { HeaderComponent } from '../header/header.component';
import { NotlistedComponent } from '../notlisted/notlisted.component';
import { ProductsComponent } from '../products/products.component';
import { NavbarComponent } from "../../../Homepage/navbar/navbar.component";
import { FooterComponent } from '../../../Homepage/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-final',
  imports: [FormsModule, CommonModule, CategoryComponent, FeaturedComponent, HeaderComponent, NotlistedComponent, ProductsComponent, NavbarComponent,NavbarComponent,FooterComponent,RouterModule],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css'
})
export class FinalComponent {

}
