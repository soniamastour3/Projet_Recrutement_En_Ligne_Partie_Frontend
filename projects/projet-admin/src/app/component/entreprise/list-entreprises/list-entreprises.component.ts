import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../Service/entreprise.service';
import { Entreprise } from '../../model/entreprise';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
;

@Component({
  selector: 'app-list-entreprises',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './list-entreprises.component.html',
  styleUrl: './list-entreprises.component.css'
})
export class ListEntreprisesComponent implements OnInit{
  entreprise!: Entreprise;
  entreprises: Entreprise[]=[];
  constructor(private entrepriseService: EntrepriseService){}
  ngOnInit(): void {
    this.getAllEntreprise();
      
  }

  getAllEntreprise(){
    this.entrepriseService.getallentreprises().subscribe(
      (data)=>{
        this.entreprises = data;
        console.log(this.entreprises)
      },
      (error)=>{
        console.error("Erreur lors de la récupération des entreprises: ", error)
      }
    )
  }

  deleteEntreprise(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce entreprise ?')) {
      this.entrepriseService.deleteentreprise(id).subscribe(
        response => {
          console.log('Entreprise supprimé avec succès', response);
          // Mettre à jour la liste des entreprises après suppression
          this.getAllEntreprise();
        },
        error => {
          console.error('Erreur lors de la suppression du entreprise', error);
        }
      );
    }
  }
  
  
  
  
  
  
}
