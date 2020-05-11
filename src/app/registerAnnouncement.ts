import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registerAnnouncement',
  templateUrl: './registerAnnouncement.html',
  styleUrls: ['./registerAnnouncement.css'],
  
})

export class RegisterAnnouncement {
    title = 'registerAnnouncement';
}

@Component({
    selector: 'app-registerAnnouncement-form',
    template: `
      Favorite Color: <input type="text" [formControl]="favoriteColorControl">
    `
  })

export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
}

