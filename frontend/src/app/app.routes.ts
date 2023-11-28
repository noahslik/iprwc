import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: '', component: StoreComponent },
];
