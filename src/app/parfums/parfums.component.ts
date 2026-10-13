import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-parfums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './parfums.component.html',
  styleUrl: './parfums.component.css'
})
export class ParfumsComponent implements OnInit {
  parfums: Parfum[];

  constructor(private parfumService: ParfumService) {
    this.parfums = parfumService.listeParfums();
  }

  ngOnInit(): void {}

  supprimerParfum(p: Parfum) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.parfumService.supprimerParfum(p);
    }
  }
}