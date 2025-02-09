import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { EntrepriseService } from '../Service/entreprise.service';
import { Entreprise } from '../../model/entreprise';

@Component({
  selector: 'app-detail-entreprise',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-entreprise.component.html',
  styleUrl: './detail-entreprise.component.css'
})
export class DetailEntrepriseComponent implements OnInit{
  entreprise!: Entreprise;
constructor(private entrepriseService: EntrepriseService, private route: ActivatedRoute){

}
ngOnInit(): void {
  this.getEntreprise();
}
  getEntreprise(){
    const idEntreprise = Number(this.route.snapshot.paramMap.get('id')); // Get product ID from route
    this.entrepriseService.getEntreprise(idEntreprise).subscribe((data) => {

      this.entreprise = data;
      console.log(this.entreprise)
    });
  }

  validateEntreprise(id: number) {
    this.entrepriseService.validateEntreprise(id).subscribe(
      (response) => {
        console.log('Validation réussie :', response);
        alert('Entreprise validée avec succès');
        window.location.reload();// Rafraîchir la liste après validation
      },
      (error) => {
        console.error('Erreur lors de la validation:', error);
        alert(`Erreur : ${error.message}`);
      }
    );
  }

}
