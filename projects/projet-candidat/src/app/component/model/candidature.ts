import { Administrateur } from "./administrateur";
import { Candidat } from "./candidat";




export interface Candidature {
    idCandidature: number;
    ref: number;
    etat: string;
    scoreTest: number;
    administrateur: Administrateur | null;
    candidat: Candidat | null;
    

}
