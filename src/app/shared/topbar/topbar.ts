import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar implements OnInit {
  currentLang = 'en-US';

  ngOnInit(): void {
    const pathLang = window.location.pathname.split('/')[1];
    this.currentLang = pathLang === 'ta' ? 'ta' : 'en-US';
  }

  get currentLangLabel(): string {
    return this.currentLang === 'ta' ? 'தமிழ்' : 'ENG';
  }

  toggleLanguage(): void {
    const newLang = this.currentLang === 'ta' ? 'en-US' : 'ta';
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/${newLang}/`;
  }
}
