import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidents } from './model/incident.model';





/// my stuff

@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {

   urlIncident = "http://localhost:8080/learn/api/incidents/";
  constructor(private http: HttpClient) {}

  getIncidents(): Observable<Incidents[]>{
      return this.http.get<[]>(this.urlIncident)
    }
  findIncident(id: number): Observable<Incidents> {
    return this.http.get<Incidents>(this.urlIncident + '/' + id);
  }
  addIncident(incident: Incidents): Observable<Incidents>{
    return this.http.post<Incidents>(this.urlIncident, incident);
  }
  deleteIncident(incidentId: number): Observable<Incidents>{
    return this.http.delete<Incidents>(this.urlIncident + '/' + incidentId);
  }
}
