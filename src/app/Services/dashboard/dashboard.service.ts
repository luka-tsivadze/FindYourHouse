import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { NavInfoService } from '../NavService/nav-info.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor( private http:HttpClient , private navServ:NavInfoService) { }
  signalData = signal(null);
  dashboardData = [{amount:'345'}, {amount:'345'}, {amount:'345'}, {amount:'345'}];

fetchDashboardData() {
  const params = new HttpParams().set('momxmareblis_idi', this.navServ.userId);
  this.http.get('get_counted_data.php', { params }).subscribe({
    next: (data) => { this.signalData.set(data);  }, 
  error: (err) => { console.error(err); 
  this.signalData.set(this.dashboardData);
  }
});
}



getData() {
  this.http.get('your-api-endpoint').subscribe(data => {
    this.signalData.set(data);  // Set the data to the signal
  });
}

}
