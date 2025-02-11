import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, share, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
userData = new BehaviorSubject<any>(null);
private cached$: Observable<any> | null = null;
  constructor(private http :HttpClient) { }

  fetchAgentData(): Observable<any> {
    if (!this.cached$) {
      this.cached$ = this.http.get('get_sale_agents.php').pipe(
        tap((data) => this.userData.next(data)), // Store the data in BehaviorSubject
        shareReplay(1) // Cache the result
      );
    }
    return this.cached$; // Return cached observable
  }
}