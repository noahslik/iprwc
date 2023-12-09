import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionService } from '../services/permission.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  return inject(PermissionService).isAdmin().then(admin => {
    if (admin) {
      return true;
    } else {
      router.navigate([""]);
      return false;
    }
  })
};