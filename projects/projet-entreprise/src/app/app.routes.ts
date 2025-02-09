import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/entreprise/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent,  children:[
    { path: '', component: LayoutComponent },
    { path: 'DashboardEntreprise', component: DashboardComponent}]}
];
