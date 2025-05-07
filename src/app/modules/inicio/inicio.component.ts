import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  totalImagenes = 14;
  imagenesMostradas: number = 0;

  get imagenesAmostrar() {
    return Array.from({ length: this.imagenesMostradas }, (_, i) => i + 1);
  }

  constructor(public route: Router, public publicService: PublicService) {}

  ngOnInit(): void {
    if (!this.publicService.isPlaying()) this.publicService.playAudio();

    this.imagenesMostradas = 1;

    setTimeout(() => this.route.navigate(['marco']), 15000);
  }

  onImagenCargada() {
    if (this.imagenesMostradas < this.totalImagenes) this.imagenesMostradas++;
  }
}
