import { Component, OnInit } from '@angular/core';
import { OffreEmploiService } from '../Service/offre-emploi.service';
import { OffreEmploi } from '../../model/offre-emploi';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-offre-emploi',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './list-offre-emploi.component.html',
  styleUrl: './list-offre-emploi.component.css'
})
export class ListOffreEmploiComponent implements OnInit{
  offreEmploi!: OffreEmploi;
  offresEmplois: OffreEmploi[]=[];
  
  offreForm!: FormGroup;
  offreId!: number;
  entrepriseId!: number;
  candidatureId!: number;
  constructor(private offreEmploiService: OffreEmploiService, private fb: FormBuilder){}
  ngOnInit(): void {
    this.getAllOffresEmploi();
    this.offreForm = this.fb.group({
      titre :['', Validators.required],
      description :['', Validators.required],
      typeContrat :['', Validators.required],
      secteur :['', Validators.required],
      adresse :['', Validators.required]
     })

   
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
  deleteOffreEmploi(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce offre ?')) {
      this.offreEmploiService.deleteoffreEmploi(id).subscribe(
        response => {
          console.log('offre supprimé avec succès', response);
          // Mettre à jour la liste des entreprises après suppression
          this.getAllOffresEmploi();
        },
        error => {
          console.error('Erreur lors de la suppression d offre', error);
        }
      );
    }
  }

  onSubmit(){
    if(this.offreForm.valid){
    const formData: FormData = new FormData();
    const offreData = this.offreForm.value;
          formData.append('titre',offreData.titre);  
          formData.append('description', offreData.description); 
          formData.append('typeContrat', offreData.typeContrat);
          formData.append('secteur',offreData.secteur);
          formData.append('adresse',offreData.adresse);

          
    
    this.offreEmploiService.updateOffreEmploi(this.offreId, formData).subscribe(
      (res) => {
        console.log('l offre aprés la mise à jour:', res);
        this.getAllOffresEmploi();
      },
      (error) => console.error('Erreur lors de la mise à jour d offre', error)
    );}
  }

  offreById(id: number){
    this.offreEmploiService.getOffreEmploi(id).subscribe(
      (data)=>{
        this.offreEmploi = data;
        this.offreId= this.offreEmploi.idOffre;
        console.log("id de offre est: ", this.offreId)
         // Utilisation de patchValue pour mettre à jour le formulaire avec les détails d offre
        this.offreForm.patchValue({
          titre: this.offreEmploi.titre,
          description: this.offreEmploi.description,
          typeContrat: this.offreEmploi.typeContrat,
          secteur: this.offreEmploi.secteur,
          adresse: this.offreEmploi.adresse
        })
        console.log(this.offreEmploi);
      },
      (error)=>{
        console.error(error)
      }
    )

  }
}
