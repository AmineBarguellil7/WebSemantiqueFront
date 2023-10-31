import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map} from 'rxjs';
import { Event } from 'src/app/models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public apiUrl = "http://localhost:8023/api/events";


   getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }


  create(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

 
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  update(id: number, data: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${id}`, data);
  }


  findById(id: number): Observable<Event> {
    return this.http.get<Event[]>(`${this.apiUrl}?id=${id}`).pipe(
      map(data => data[0]) 
    );
  }

}


















/*   create(event?: Event): Observable<Object> {
    return this.http.post<Object>(`${this.apiUrl}`, event);
  }
  getEvents() {
    return this.http.get(this.apiUrl);
  }
  deleteEvent(id: any) {
    return this.http.delete(this.apiUrl + id);
  }
  updateEvent(event: Event) {
    return this.http.put(this.apiUrl, event);
  }
  getEventById(id: any) {
    return this.http.get(this.apiUrl + id);
  }
} */
