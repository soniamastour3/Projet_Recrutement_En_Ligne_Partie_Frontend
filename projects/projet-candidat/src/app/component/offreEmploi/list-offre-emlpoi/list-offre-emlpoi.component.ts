import { Component, OnInit } from '@angular/core';
import { OffreEmploiService } from '../Service/offre-emploi.service';
import { OffreEmploi } from '../../model/offre-emploi';

@Component({
  selector: 'app-list-offre-emlpoi',
  standalone: true,
  imports: [],
  templateUrl: './list-offre-emlpoi.component.html',
  styleUrl: './list-offre-emlpoi.component.css'
})
export class ListOffreEmlpoiComponent implements OnInit{
  offreEmmploi!: OffreEmploi;
  offresEmplois: OffreEmploi[]= [];
  constructor(private offreEmploiService: OffreEmploiService){

  }
  ngOnInit(): void {
      this.getAllOffresEmploi();
  }
  getAllOffresEmploi(){
    this.offreEmploiService.getalloffresEmploi().subscribe(
      (data)=>{
        this.offresEmplois = data;
        console.log(this.offresEmplois)
      },
      (error)=>{
        console.error("Erreur lors de la récupération des Offres d'Emploi: ", error)
      }
    )
  }

}
