import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListEntreprisesComponent } from './component/entreprise/list-entreprises/list-entreprises.component';
import { DetailEntrepriseComponent } from './component/entreprise/detail-entreprise/detail-entreprise.component';
import { ListCandidatureComponent } from './component/candidature/list-candidature/list-candidature.component';
import { DetailCandidatureComponent } from './component/candidature/detail-candidature/detail-candidature.component';
import { ListOffreEmploiComponent } from './component/offreEmploi/list-offre-emploi/list-offre-emploi.component';
import { DetailOffreComponent } from './component/offreEmploi/detail-offre/detail-offre.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent,  children:[
    { path: '', component: LayoutComponent },
    { path: 'listEntreprise', component: ListEntreprisesComponent},
    { path: 'detailEntreprise/:id', component: DetailEntrepriseComponent},
    { path: 'listCandidature', component: ListCandidatureComponent},
    { path: 'detailCandidature/:id', component: DetailCandidatureComponent},
    { path: 'listOffreEmploi', component: ListOffreEmploiComponent},
    { path: 'detailOffre/:id', component: DetailOffreComponent},
]}];
