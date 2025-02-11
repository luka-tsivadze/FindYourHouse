import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http:HttpClient ) { }

  
  sendView(id:number){
    this.http.post('counter_views.php', {id:id}).subscribe({
    next: (resp) => { console.log(resp); },
    error: (err) => {
      console.error('Error occurred while sending view:', err.message);
      console.error('Error details:', err);
    }
    });
  }
}
