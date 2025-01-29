import { Routes } from '@angular/router';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'admin-add', component:AdminAddComponent },
    { path: 'admin-view', component:AdminViewComponent  }
];
