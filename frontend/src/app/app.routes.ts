import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StoreComponent } from './components/store/store.component';
import { AdminGuard } from './guards/admin.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    { path: 'checkout', component: CheckoutComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
    { path: '', component: StoreComponent },
];
