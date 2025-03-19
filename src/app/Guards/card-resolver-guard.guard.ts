import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { forkJoin, Observable, of, tap } from 'rxjs';
import { NavInfoService } from '../Services/NavService/nav-info.service';
import { LoadingServiceService } from '../Services/LoadingServ/loading-service.service';

@Injectable({
  providedIn: 'root'
})
export class CardsResolverGuard implements Resolve<any> {
 userId;
  constructor(private allCardsService: AllCardsService , private navserv:NavInfoService, private appService:LoadingServiceService) {}

  resolve(): Observable<any> {
    this.appService.setLoading(true); // Start showing loading screen
 
    
    return forkJoin({
      cards:of([]), 
      nav: this.navserv.getUserInfo() 
    }).pipe(
      tap(() => this.appService.setLoading(true)) 
    );
  }
}
