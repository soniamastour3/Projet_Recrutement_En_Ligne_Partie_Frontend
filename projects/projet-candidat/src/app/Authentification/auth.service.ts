import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../component/model/candidat';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  Registre(candidat: Candidat): Observable<Candidat>{
    return this.http.post<Candidat>(`${environment.url}/api/auth/signup`, candidat);
  }
}
