import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreEmploi } from '../../model/offre-emploi';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {

  constructor(private http: HttpClient) { }

getalloffresEmploi(): Observable<OffreEmploi[]>{
    return this.http.get<OffreEmploi[]>(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/all`)
  }
deleteoffreEmploi(id: number):Observable<any>{
      return this.http.delete<any>(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/delete/${id}`)
     }
getOffreEmploi(id: number):Observable<OffreEmploi>{
      return this.http.get<OffreEmploi>(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/getone/${id}`)
    }
validateOffreEmploi(id: number): Observable<any> {
      return this.http.put(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/validate/${id}`, null);
    }

updateOffreEmploi(id: number, formData: FormData):Observable<any>{
      return this.http.put<any>(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/update/${id}`,formData)
    }
}
