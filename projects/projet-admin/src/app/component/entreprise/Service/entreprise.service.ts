import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, environment1 } from '../../../../environments/environment.development';
import { Entreprise } from '../../model/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  getallentreprises(): Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(`${environment.url}/ENTREPRISESERVICE/entreprises/all`)
  }

  deleteentreprise(id: number):Observable<any>{
    return this.http.delete<any>(`${environment.url}/ENTREPRISESERVICE/entreprises/delete/${id}`)
   }

   getEntreprise(id: number):Observable<Entreprise>{
    return this.http.get<Entreprise>(`${environment.url}/ENTREPRISESERVICE/entreprises/getone/${id}`)
  }

  validateEntreprise(id: number): Observable<any> {
    return this.http.put(`${environment.url}/ENTREPRISESERVICE/entreprises/validate/${id}`, null);
  }
}
