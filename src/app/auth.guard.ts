import { CanActivateFn } from '@angular/router';
import { NavInfoService } from './Services/NavService/nav-info.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {

console.log('authGuard' , route, state);
 console.log('navInfo', NavInfoService);

 
 const navInfoService = inject(NavInfoService);
 
 if (navInfoService.IsSignedIn.signed) {

   return true;
 }else{
   const router = inject(Router);
   router.navigate(['/']);  
   return false;

}
};