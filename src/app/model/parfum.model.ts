import { Categorie } from './cathegorie.model';

export class Parfum {
  idParfum!: number;
  nomParfum!: string;
  prixParfum!: number;
  dateCreation!: Date;
  categorie!: Categorie;
}