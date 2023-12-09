import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StoreComponent } from './components/store/store.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
    { path: '', component: StoreComponent },
];
