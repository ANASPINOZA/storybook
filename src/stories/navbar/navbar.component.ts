import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() width?: string;
  selectedLanguage: string = 'English';
  url: string ='https://cdn.builder.io/api/v1/image/assets/TEMP/28a0ee491afdee2f5e6ca3e60173f2acb2e6cfc4ca3f820edf2a79f7980217c8?apiKey=0fddfdc2e7cd4aa3846da2047f18e0da&' ;
  dropdownOpen: boolean = false;
  languages = [
    { code: 'en', label: 'English' , url:"https://cdn.builder.io/api/v1/image/assets/TEMP/28a0ee491afdee2f5e6ca3e60173f2acb2e6cfc4ca3f820edf2a79f7980217c8?apiKey=0fddfdc2e7cd4aa3846da2047f18e0da&"},
    { code: 'es', label: 'Español' ,url:'https://www.larousse.fr/encyclopedie/data/images/1009665-Drapeau_de_lEspagne.jpg'},
    { code: 'fr', label: 'Français' ,url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png' },
    { code: 'de', label: 'Deutsch' , url:'https://www.kindernetz.de/wissen/1712567994859%2Ceuropa-deutschland-102~_v-16x9@2dL_-6c42aff4e68b43c7868c3240d3ebfa29867457da.jpg'}
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(code: string) {
    const selectedLang = this.languages.find(lang => lang.code === code);
    if (selectedLang) {
      this.selectedLanguage = selectedLang.label;
      this.url = selectedLang.url;
      this.dropdownOpen = true;
    }
  }
}
