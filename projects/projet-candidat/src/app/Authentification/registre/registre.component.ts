import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent implements OnInit {
  RegistreForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.RegistreForm= this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    
    // Appel du service pour enregistrer le produit
    this.authService.Registre(this.RegistreForm.value).subscribe(
      (res:any) =>{ 
        console.log(res);},
      (error) => console.error('Erreur lors de l\'enregistrement du candidat', error)
    );
  }



}
