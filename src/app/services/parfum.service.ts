import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Categorie } from '../model/cathegorie.model';

@Injectable({ providedIn: 'root' })
export class ParfumService {
  parfums: Parfum[];
  parfum!: Parfum;
  categories: Categorie[];

  constructor() {
    this.categories = [
      { idCat: 1, nomCat: 'Homme' },
      { idCat: 2, nomCat: 'Femme' }
    ];

    this.parfums = [
      { idParfum: 1, nomParfum: 'Dior Sauvage', prixParfum: 300.600,
        dateCreation: new Date('01/14/2011'), categorie: { idCat: 1, nomCat: 'Homme' } },
      { idParfum: 2, nomParfum: 'Bleu de Chanel', prixParfum: 450,
        dateCreation: new Date('12/17/2010'), categorie: { idCat: 1, nomCat: 'Homme' } },
      { idParfum: 3, nomParfum: 'La Vie est Belle', prixParfum: 200.123,
        dateCreation: new Date('02/20/2020'), categorie: { idCat: 2, nomCat: 'Femme' } }
    ];
  }

  listeParfums(): Parfum[] {
    return this.parfums;
  }

  ajouterParfum(p: Parfum) {
    this.parfums.push(p);
  }

  supprimerParfum(p: Parfum) {
    const index = this.parfums.indexOf(p, 0);
    if (index > -1) {
      this.parfums.splice(index, 1);
    }
  }

  consulterParfum(id: number): Parfum {
    this.parfum = this.parfums.find(p => p.idParfum == id)!;
    return this.parfum;
  }

  updateParfum(p: Parfum) {
    const index = this.parfums.indexOf(p, 0);
    if (index > -1) {
      this.parfums.splice(index, 1);
      this.parfums.splice(index, 0, p);
    }
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }
}