import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../Service/candidature.service';
import { Candidature } from '../../model/candidature';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-candidature',
  standalone: true,
  imports: [],
  templateUrl: './detail-candidature.component.html',
  styleUrl: './detail-candidature.component.css'
})
export class DetailCandidatureComponent implements OnInit{
  candidature!: Candidature;

  constructor(private candidatureService: CandidatureService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getCandidature();
      
  }
  getCandidature(){
    const idCandidature = Number(this.route.snapshot.paramMap.get('id')); // Get product ID from route
    this.candidatureService.getCandidature(idCandidature).subscribe((data) => {

      this.candidature = data;
      console.log(this.candidature)
    });
  }
}
