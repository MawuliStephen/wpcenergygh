import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative h-[90vh] overflow-hidden">
      <!-- Slider Container -->
      <div class="relative h-full w-full">
        <!-- Slides -->
        @for (slide of slides(); track slide.id; let i = $index) {
          <div 
            class="absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out"
            [class]="'bg-gradient-to-r ' + slide.bgFrom + ' ' + slide.bgTo"
            [class.opacity-0]="currentIndex() !== i"
            [class.opacity-100]="currentIndex() === i"
          >
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
                {{ slide.title }}
              </h1>
              <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 animate-fadeIn [animation-delay:100ms]">
                {{ slide.description }}
              </p>
              <div class="animate-fadeIn [animation-delay:200ms]">
                <a 
                  [routerLink]="slide.link" 
                  class="inline-block px-8 py-3 bg-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  [class]="slide.buttonColor + ' ' + slide.buttonHover"
                >
                  {{ slide.buttonText }}
                </a>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Slider Controls -->
      <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        @for (slide of slides(); track slide.id; let i = $index) {
          <button 
            type="button"
            class="h-2 rounded-full bg-white transition-all duration-300"
            [class]="currentIndex() === i ? 'w-8 bg-opacity-100' : 'w-4 bg-opacity-50'"
            (click)="goToSlide(i)"
            [attr.aria-current]="currentIndex() === i"
            [attr.aria-label]="'Go to slide ' + (i + 1)"
          ></button>
        }
      </div>
    </section>
  `,
  styles: `
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0;
    }
    
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
      from {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  `
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  currentIndex = signal(0);
  private intervalId: number | undefined;

  readonly slides = signal([
    {
      id: 1,
      bgFrom: 'from-blue-900',
      bgTo: 'to-blue-700',
      title: "Transforming Ghana's Energy Future",
      description: "Pioneering sustainable energy solutions for a brighter tomorrow",
      buttonText: "Explore Solutions",
      buttonColor: "text-blue-900",
      buttonHover: "hover:bg-blue-100",
      link: "/about"
    },
    {
      id: 2,
      bgFrom: 'from-orange-600',
      bgTo: 'to-amber-500',
      title: "Solar Power Revolution",
      description: "Harnessing Ghana's abundant sunlight for clean, renewable energy",
      buttonText: "Discover Solar",
      buttonColor: "text-orange-600",
      buttonHover: "hover:bg-orange-100",
      link: "/solar"
    },
    {
      id: 3,
      bgFrom: 'from-emerald-700',
      bgTo: 'to-green-500',
      title: "Sustainable Development",
      description: "Building energy solutions that empower communities and protect our planet",
      buttonText: "Learn More",
      buttonColor: "text-emerald-700",
      buttonHover: "hover:bg-emerald-100",
      link: "/sustainability"
    },
    {
      id: 4,
      bgFrom: 'from-purple-900',
      bgTo: 'to-indigo-700',
      title: "Innovative Technologies",
      description: "Cutting-edge energy solutions tailored for Ghana's unique needs",
      buttonText: "Our Technology",
      buttonColor: "text-purple-900",
      buttonHover: "hover:bg-purple-100",
      link: "/technology"
    }
  ]);

  ngOnInit() {
    this.startAutoRotation();
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }

  private startAutoRotation() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex.update(current => 
        (current + 1) % this.slides().length
      );
    }, 5000);
  }

  private stopAutoRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.stopAutoRotation();
    this.currentIndex.set(index);
    this.startAutoRotation();
  }
}