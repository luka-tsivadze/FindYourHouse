import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { BehaviorSubject, catchError, interval, Observable, of, startWith, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviewsSubject = new BehaviorSubject<any[]>([]);
  reviews$ = this.reviewsSubject.asObservable(); // Expose observable

  constructor(private http: HttpClient) {}

  fetchUserReviews(momxmareblis_id: string): Observable<any[]> {
    const params = new HttpParams().set('momxmareblis_id', momxmareblis_id);

    return this.http.get<any[]>('get-reviews.php', { params }).pipe(
      tap(reviews => this.reviewsSubject.next(reviews)) // Update BehaviorSubject
    );
  }

  cardReview$=new BehaviorSubject<any[]>([]);
  fetchCardReviews(gancxadebis_idi: number): Observable<any[]> {
    const params = new HttpParams().set('gancxadebis_idi', gancxadebis_idi.toString());
  
    return interval(35000).pipe( // ⏳ Trigger request every 30 seconds
      startWith(0), // 🚀 Fetch immediately on subscription
      switchMap(() => this.http.get<any[]>('get_house_reviews.php', { params }).pipe(
        tap(data => {
          console.log('Review Cards !!', data);
          this.cardReview$.next(data); // ✅ Update BehaviorSubject
        }),
        catchError(error => {
          console.error('Error fetching reviews', error);
          this.cardReview$.next([]); 
          return of([]);
        })
      ))
    );
  }
  
}
