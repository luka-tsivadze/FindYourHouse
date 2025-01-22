import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
  private editItemIdSubject = new BehaviorSubject<number | null>(null);
  editItemId$ = this.editItemIdSubject.asObservable();

  setEditItemId(el) {
    this.editItemIdSubject.next(el);
  }

  getEditItemId(): number | null {
    return this.editItemIdSubject.getValue();
  }
}
