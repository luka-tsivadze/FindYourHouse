import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
  private editItemIdSubject = new BehaviorSubject<number | null>(null);
  editItemId$ = this.editItemIdSubject.asObservable();
private cachedmyCards$: Observable<any[]> | null = null;
  setEditItemId(el) {
    this.editItemIdSubject.next(el);
  }

  getEditItemId(): number | null {
    return this.editItemIdSubject.getValue();
  }
  constructor(private http:HttpClient ) { }


  userData(): Observable<any[]> {
    if (this.cachedmyCards$) {
      return this.cachedmyCards$;
    }

    const id = localStorage.getItem('id');
    if (!id) {
      return of([]); // Return an empty array if there's no id.
    }

    this.cachedmyCards$ = this.http.post<any[]>('get_my_houses.php', { id })
      .pipe(
        map((data: any[]) => {
          return data.map(element => {
            // Default image if parsing fails or no images exist.
            let firstImg = '../../../assets/Imges/StaticImg/CardImges/fp-2.jpg';
            try {
              const images = JSON.parse(element.fotoebi);
              if (Array.isArray(images) && images.length > 0) {
                firstImg = `houses/${element.amtvirtvelis_maili}/${element.gancxadebis_saidentifikacio_kodi}/photos/${images[0]}`;
              }
            } catch (error) {
              console.error('Error parsing fotoebi JSON:', error);
            }

            // Create a clean additionalInfo object without specific keys.
            const additionalInfo = { ...element };
            delete additionalInfo.idi;
            delete additionalInfo.satauri;
            delete additionalInfo.statusis_gaaqtiurebis_tarigi;
            delete additionalInfo.misamarti;

            return {
              id: element.idi,
              imgLink: firstImg,
              title: element.satauri || 'No Title',
              review: 3,              // Placeholder for actual logic
              reviewedAmount: 0,        // Placeholder for actual logic
              view: 0,                  // Placeholder for actual logic
              date: element.statusis_gaaqtiurebis_tarigi || 'No Date',
              location: element.misamarti || 'No Location',
              additionalInfo: { ...additionalInfo }
            };
          });
        }),
        catchError(error => {
          console.error('Error fetching data:', error);
          return of([]); // Return an empty array on error.
        }),
        shareReplay(1)
      );

    return this.cachedmyCards$;
  }

  
  private changeUserDataSubject = new BehaviorSubject<any>(null);
  changeUserData$ = this.changeUserDataSubject.asObservable();

  ChangeUserData(data: any): Observable<any> {
    this.cachedmyCards$ = null;
    this.http.post('change_user_data.php', data).subscribe({
      next: (response) => {
        console.log('Update response:', response);
        this.changeUserDataSubject.next(response);
      },
      error: (error) => {
        console.error('Error updating data:', error);
        this.changeUserDataSubject.next(null);
      }
    });
    this.userData();
    return this.changeUserData$;
  }

  private Views$ = new BehaviorSubject<any>([]);
  views(activePage: any[]): BehaviorSubject<any> {  
    const gancxadebisIds = activePage.map((element: any) => element.id).join(',');

    if (!gancxadebisIds) {
      return this.Views$; // Avoid unnecessary API calls
    }

    this.http.get(`get-views-counted-data.php`, { params: { gancxadebis_ids: gancxadebisIds } }).subscribe({
      next: (data: any) => {
        console.log('Views data:', data);

        activePage = activePage.map((item: any) => ({
          ...item,
          view: data[item.id] || 0 // Assign API result or default to 0
        }));
        this.Views$.next(activePage);
      },
      error: (error) => {
        console.error('Error fetching views:', error);
        this.Views$.next(activePage);
      },
    });

    return this.Views$;
  }
   
}
