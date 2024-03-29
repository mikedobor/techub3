import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.sevice';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.getToken();
    }

}