import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { OffreEmploi } from '../../model/offre-emploi';

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {

  constructor(private http: HttpClient) { }

  getalloffresEmploi(): Observable<OffreEmploi[]>{
      return this.http.get<OffreEmploi[]>(`${environment.url}/OFFREEMPLOISERVICE/offreEmplois/all`)
    }

}
