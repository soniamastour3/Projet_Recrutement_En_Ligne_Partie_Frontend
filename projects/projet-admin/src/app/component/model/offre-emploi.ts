import { Candidature } from "./candidature";
import { Entreprise } from "./entreprise";

export interface OffreEmploi {
    idOffre: number;
    titre: string;
    description: string;
    typeContrat: string;
    secteur: string;
    adresse: string;
    validated: boolean;
    candidature: Candidature;
    entreprise: Entreprise;
    
}
