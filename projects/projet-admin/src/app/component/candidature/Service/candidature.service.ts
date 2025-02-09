import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, environment2 } from '../../../../environments/environment.development';
import { Candidature } from '../../model/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }

  getallcandidatures(): Observable<Candidature[]>{
    return this.http.get<Candidature[]>(`${environment.url}/CANDIDATURESERVICE/candidatures/all`)
  }

  deletecandidature(id: number):Observable<any>{
    return this.http.delete<any>(`${environment.url}/CANDIDATURESERVICE/candidatures/delete/${id}`)
   }
   getCandidature(id: number):Observable<Candidature>{
    return this.http.get<Candidature>(`${environment.url}/CANDIDATURESERVICE/candidatures/getone/${id}`)
  }
}
