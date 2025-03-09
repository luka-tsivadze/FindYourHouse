import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AllCardsService } from '../Services/all-cards/all-cards.service';
import { forkJoin, Observable } from 'rxjs';
import { NavInfoService } from '../Services/NavService/nav-info.service';

@Injectable({
  providedIn: 'root'
})
export class CardsResolverGuard implements Resolve<any> {
  constructor(private allCardsService: AllCardsService , private navserv:NavInfoService) {}

  resolve(): Observable<any> {
    return forkJoin({
      cards: this.allCardsService.fetchDataFromApi(), // Fetch cards
      // views: this.navserv.sendWebsiteView() // Send analytics
    });
  }
}
