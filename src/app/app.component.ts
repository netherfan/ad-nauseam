import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'read-nauseam';

  images = [
    {id: 1,
      label: "Brothers Kramazov"},
    {id: 2,
      label: "Fight Club"},
  ];

  percorso = "../assets/images/carousel-";
}
