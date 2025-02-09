import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListOffreEmlpoiComponent } from './component/offreEmploi/list-offre-emlpoi/list-offre-emlpoi.component';
import { RegistreComponent } from './Authentification/registre/registre.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent,  children:[
        { path: '', component: LayoutComponent },
    { path: 'listOffreEmploi', component: ListOffreEmlpoiComponent},
    {path: 'registre', component: RegistreComponent}]}
];
