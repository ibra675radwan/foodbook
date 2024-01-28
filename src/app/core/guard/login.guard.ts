

import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { state } from '@angular/animations';


export const loginGuard: CanActivateFn= (route, state)=> {
  if (!inject(AuthService).isAuthenticatedUser()) {
    return true;
  } else {
    // Redirect to the login page if the user is not authenticated
    inject(Router).navigate(['/Dashboard']);
    return false;
  }
};