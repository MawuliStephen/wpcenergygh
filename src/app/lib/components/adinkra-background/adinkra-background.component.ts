import { Component } from '@angular/core';

@Component({
  selector: 'app-adinkra-background',
  standalone: true,
  template: `
    <div class="absolute inset-0 overflow-hidden opacity-10 z-0 pointer-events-none">
      <div class="grid grid-cols-6 md:grid-cols-12 gap-8 h-full w-full">
        @for (row of [1,2,3,4,5,6]; track row) {
          @for (col of [1,2,3,4,5,6,7,8,9,10,11,12]; track col) {
            <div class="flex items-center justify-center">
              <svg class="w-full h-full text-gray-300" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                @switch ((row + col) % 4) {
                  @case (0) {
                    <!-- Gye Nyame (Except God) -->
                    <path fill="currentColor" d="M50 10L90 50L50 90L10 50L50 10Z" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="5" />
                  }
                  @case (1) {
                    <!-- Sankofa (Return and get it) -->
                    <path fill="currentColor" d="M50 10Q70 30 50 50Q30 70 50 90Q70 70 50 50Q30 30 50 10Z" />
                  }
                  @case (2) {
                    <!-- Adinkrahene (King of Adinkra symbols) -->
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="5" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="5" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                  }
                  @case (3) {
                    <!-- Dwennimmen (Ram's horns) -->
                    <path fill="currentColor" d="M20 50Q50 20 80 50Q50 80 20 50Z" />
                  }
                }
              </svg>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    svg {
      transition: transform 0.5s ease, opacity 0.3s ease;
    }
    
    svg:hover {
      transform: scale(1.2);
      opacity: 10.3;
    }
  `]
})
export class AdinkraBackgroundComponent {}