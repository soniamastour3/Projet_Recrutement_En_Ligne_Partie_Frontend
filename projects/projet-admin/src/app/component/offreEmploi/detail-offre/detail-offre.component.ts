import { Component, OnInit } from '@angular/core';
import { OffreEmploi } from '../../model/offre-emploi';
import { OffreEmploiService } from '../Service/offre-emploi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-offre',
  standalone: true,
  imports: [],
  templateUrl: './detail-offre.component.html',
  styleUrl: './detail-offre.component.css'
})
export class DetailOffreComponent implements OnInit{
 offreEmploi!: OffreEmploi;

  constructor(private offreEmploiService: OffreEmploiService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getOffreEmploi();
      
  }
  getOffreEmploi(){
    const idOffreEmploi = Number(this.route.snapshot.paramMap.get('id')); // Get product ID from route
    this.offreEmploiService.getOffreEmploi(idOffreEmploi).subscribe((data) => {

      this.offreEmploi = data;
      console.log(this.offreEmploi)
    });
  }
  validateOffreEmploi(id: number) {
    this.offreEmploiService.validateOffreEmploi(id).subscribe(
      (response) => {
        console.log('Validation réussie :', response);
        alert('offre Emploi validée avec succès');
        window.location.reload();// Rafraîchir la liste après validation
      },
      (error) => {
        console.error('Erreur lors de la validation:', error);
        alert(`Erreur : ${error.message}`);
      }
    );
  }

}
