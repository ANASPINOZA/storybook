import { Component } from '@angular/core';

@Component({
  selector: 'app-profilbutton',
  templateUrl: './profilbutton.component.html',
  styleUrls: ['./profilbutton.component.css']
})
export class ProfilbuttonComponent {
  menuOpen: boolean = false;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
