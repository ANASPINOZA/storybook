import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  template: `
<article class="facebook-comments-card">
  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b34f9e090248b629192e6c23d14bd676b1050536ae7e212f9b28e1a95e26e31?apiKey=61d204e0c12947c1a81bbc8591c17a9c&" alt="Facebook icon" class="facebook-icon" />
  <h2 class="card-title">{{ label }}</h2>
</article>`,
})
export class IconComponent {

}
