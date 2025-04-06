import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light';

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;

    if (this.currentTheme === 'light') {
      root.style.setProperty('--primary-color', '#007bff');
      root.style.setProperty('--secondary-color', '#6c757d');
      root.style.setProperty('--tertiary-color', '#28a745');
      root.style.setProperty('--text-color', '#333');
      root.style.setProperty('--background-color', '#f8f9fa');
    } else if (this.currentTheme === 'dark') {
      root.style.setProperty('--primary-color', '#1e90ff');
      root.style.setProperty('--secondary-color', '#495057');
      root.style.setProperty('--tertiary-color', '#34d399');
      root.style.setProperty('--text-color', '#f8f9fa');
      root.style.setProperty('--background-color', '#333');
    }
  }
}