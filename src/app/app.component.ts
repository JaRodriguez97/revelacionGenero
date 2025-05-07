import { Component, HostListener } from '@angular/core';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'revelacionGenero';

  constructor(public publicService: PublicService) {}

  @HostListener('document:visibilitychange', ['$event'])
  onVisibilityChange() {
    if (document.hidden) this.publicService.pauseAudio();
    else this.publicService.playAudio();
  }
}
