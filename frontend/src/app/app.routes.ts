import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: '', component: StoreComponent },
];
