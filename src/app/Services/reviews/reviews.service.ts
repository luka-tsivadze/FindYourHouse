import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribe } from 'node:diagnostics_channel';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

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
    console.log('Fetching reviews for card Id:', gancxadebis_idi);
     this.http.post<any[]>('get_house_reviews.php ', {gancxadebis_idi:gancxadebis_idi}).subscribe({
      next: (data) =>{
        console.log( 'review Cards !!', data);
        this.cardReview$.next(data);
      },
      error: (error) => {
        console.error('Error fetching reviews', error);
          this.cardReview$.next([]);
    }
    });
      return this.cardReview$;
  }

}
