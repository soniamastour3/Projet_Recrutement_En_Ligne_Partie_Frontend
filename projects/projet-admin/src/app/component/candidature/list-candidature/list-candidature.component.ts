import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../Service/candidature.service';
import { Candidature } from '../../model/candidature';
import { Candidat } from '../../model/candidat';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-candidature',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list-candidature.component.html',
  styleUrl: './list-candidature.component.css'
})
export class ListCandidatureComponent implements OnInit{
 
  candidatures: Candidature[]= [];
candidature!: Candidature;
  
  
  constructor(private candidatureService: CandidatureService){}
  ngOnInit(): void {
    this.getAllCandidature();
      
  }
  getAllCandidature(){
    this.candidatureService.getallcandidatures().subscribe(
      (data)=>{
        this.candidatures = data;
        console.log(this.candidatures)
      },
      (error)=>{
        console.error("Erreur lors de la récupération des candidatures: ", error)
      }
    )
  }
  deleteCandidature(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce candidature ?')) {
      this.candidatureService.deletecandidature(id).subscribe(
        response => {
          console.log('Candidature supprimé avec succès', response);
          // Mettre à jour la liste des entreprises après suppression
          this.getAllCandidature();
        },
        error => {
          console.error('Erreur lors de la suppression du candidature', error);
        }
      );
    }
  }
}
