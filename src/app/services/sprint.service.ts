import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Sprint } from '../models/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

   constructor(private httpClient : HttpClient) { }

   getSprints(): Observable<Sprint[]> {
    return this.httpClient.get(`${environment.apiUrl}/Projects`) as Observable<Sprint[]>;
  } 
  addSprint(sprint: Sprint): Observable<Sprint> {
    return this.httpClient.post<Sprint>(`${environment.apiUrl}/Projets`, sprint);
  }
}
