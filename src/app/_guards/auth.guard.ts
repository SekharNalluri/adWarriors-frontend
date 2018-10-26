import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

   
    constructor(private router: Router) { }

    loggedIn(userId:string, userType: string){
        localStorage.setItem('currentUser', userId)
        localStorage.setItem('currentUserType', userType)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {       
            if(state.url == "/" && localStorage.getItem('currentUserType') === 'Advertiser'){
                this.router.navigate(['/advertiser']);
                return false;
            }
            if(state.url == "/" && localStorage.getItem('currentUserType') === 'Promoter'){
                this.router.navigate(['/promoter']);
                return false;
            }
            return true;
        }

        //not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}