import { Routes } from '@angular/router';
import { HomeComponent } from './Homepage/home/home.component';
import { FinalComponent } from './Pages/Accessories/final/final.component';
import { ViewallComponent } from './Pages/mixed brand/viewall/viewall.component';
import { ServicefinalComponent } from './Pages/Service Page/servicefinal/servicefinal.component';
import { NikonfinalComponent } from './Pages/Nikon/nikonfinal/nikonfinal.component';
import { CanonfinalComponent } from './Pages/canon/canonfinal/canonfinal.component';
import { SonyfinalComponent } from './Pages/sony/sonyfinal/sonyfinal.component';
import { CartfinalComponent } from './Pages/cart/cartfinal/cartfinal.component';
import { SigninfinalComponent } from './Pages/signin/signinfinal/signinfinal.component';
import { SignupfinalComponent } from './Pages/signup/signupfinal/signupfinal.component';
import { GuidefinalComponent } from './Pages/how to buy/guidefinal/guidefinal.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servicefinal', component:ServicefinalComponent  },
    { path: 'final', component: FinalComponent },
    { path: 'viewall', component: ViewallComponent },
    { path: 'nikonfinal', component: NikonfinalComponent },
    { path: 'canonfinal', component: CanonfinalComponent },
    { path: 'sonyfinal', component: SonyfinalComponent },
    { path: 'cartfinal', component: CartfinalComponent },
    { path: 'signinfinal', component: SigninfinalComponent },
    { path: 'signupfinal', component: SignupfinalComponent },
    { path: 'guidefinal', component: GuidefinalComponent }
];
