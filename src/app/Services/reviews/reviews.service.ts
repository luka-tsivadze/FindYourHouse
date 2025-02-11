import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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



}
