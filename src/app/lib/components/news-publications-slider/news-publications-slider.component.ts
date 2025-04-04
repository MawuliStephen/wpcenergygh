import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ContentItem {
  id: number;
  type: 'news' | 'publication';
  title: string;
  brief: string;
  date: string;
  route: string;
}

@Component({
  selector: 'app-news-publications-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mb-12">
      <h2 class="text-[#F36E23] pb-4 border-b-2 border-gray-100 font-semibold text-xl lg:text-2xl">
        Publications & News
      </h2>
      <h3 class="font-thin mb-6 text-sm md:text-base lg:text-lg text-[#333]">
        Latest updates from WPC Energy Ghana
      </h3>

      <!-- Slider Container -->
      <div class="relative overflow-hidden">
        <!-- Slides -->
        <div class="flex transition-transform duration-300" [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
          @for (slide of [0,1,2]; track slide) {
            <div class="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-1 gap-4 px-1">
              @for (item of getSlideItems(slide); track item.id) {
                <a 
                  [routerLink]="item.route"
                  class="block bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span 
                    class="inline-block px-2 py-1 text-xs mb-2 rounded"
                    [class.bg-blue-100]="item.type === 'news'"
                    [class.bg-orange-100]="item.type === 'publication'"
                    [class.text-blue-800]="item.type === 'news'"
                    [class.text-orange-800]="item.type === 'publication'"
                  >
                    {{ item.type | uppercase }}
                  </span>
                  <h4 class="font-semibold text-lg mb-2 text-gray-800">{{ item.title }}</h4>
                  <p class="text-gray-600 text-sm mb-3">{{ item.brief }}</p>
                  <span class="text-xs text-gray-500">{{ item.date }}</span>
                </a>
              }
            </div>
          }
        </div>

        <!-- Navigation Arrows -->
        <button 
          (click)="prevSlide()"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          [class.invisible]="currentSlide === 0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        <button 
          (click)="nextSlide()"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          [class.invisible]="currentSlide === 2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

          <div class="flex flex-row justify-between mt-6 md:mt-8 lg:mt-10">
      <!-- Slide Indicators -->
      <div class="  space-x-2">
        @for (i of [0,1,2]; track i) {
          <button 
            (click)="goToSlide(i)"
            class="w-3 h-3 rounded-full transition-all"
            [class.bg-[#F36E23]]="currentSlide === i"
            [class.bg-gray-300]="currentSlide !== i"
          ></button>
        }

        
      </div>

         <!-- Button (uncomment when needed) -->
         <div class="  ">
            <a href="/news" class="inline-block bg-[#F36E23] py-2 px-6 text-sm md:text-base text-white hover:scale-105 transition-transform duration-300">
              LEARN MORE
            </a>
          <!-- </div> -->
      </div>

      </div>


    </div>
  `,
  styles: []
})
export class NewsPublicationsSliderComponent {
  currentSlide = 0;
  
  contentItems: ContentItem[] = [
    {
      id: 1,
      type: 'news',
      title: 'WPC Energy Ghana Launches New Initiative',
      brief: 'New program aims to boost renewable energy adoption in rural communities across Ghana.',
      date: 'May 15, 2023',
      route: '/news/1'
    },
    {
      id: 2,
      type: 'publication',
      title: '2023 Energy Market Report',
      brief: 'Comprehensive analysis of Ghana\'s energy sector performance and future projections.',
      date: 'April 28, 2023',
      route: '/publications/2023-report'
    },
    {
      id: 3,
      type: 'news',
      title: 'Partnership with SolarTech Ghana',
      brief: 'Collaboration to bring affordable solar solutions to 10,000 households.',
      date: 'April 15, 2023',
      route: '/news/solar-partnership'
    },
    {
      id: 4,
      type: 'publication',
      title: 'Guide to Sustainable Energy Practices',
      brief: 'Practical guide for businesses looking to reduce their carbon footprint.',
      date: 'March 30, 2023',
      route: '/publications/sustainability-guide'
    },
    {
      id: 5,
      type: 'news',
      title: 'Energy Innovation Awards 2023',
      brief: 'WPC Energy Ghana recognizes outstanding contributions to energy innovation.',
      date: 'March 22, 2023',
      route: '/news/innovation-awards'
    },
    {
      id: 6,
      type: 'publication',
      title: 'Quarterly Energy Briefing Q1 2023',
      brief: 'Key insights and statistics from the first quarter of 2023.',
      date: 'March 10, 2023',
      route: '/publications/q1-2023'
    },
    {
      id: 7,
      type: 'news',
      title: 'Community Energy Workshop Series',
      brief: 'Free workshops to educate communities about energy conservation.',
      date: 'February 28, 2023',
      route: '/news/workshop-series'
    },
    {
      id: 8,
      type: 'publication',
      title: 'Policy Recommendations for Energy Sector',
      brief: 'WPC Energy Ghana proposes new policy frameworks for sustainable growth.',
      date: 'February 15, 2023',
      route: '/publications/policy-recommendations'
    },
    {
      id: 9,
      type: 'news',
      title: 'New Board Members Announced',
      brief: 'Industry leaders join WPC Energy Ghana\'s board of directors.',
      date: 'January 30, 2023',
      route: '/news/new-board-members'
    }
  ];

  getSlideItems(slideIndex: number): ContentItem[] {
    const start = slideIndex * 3;
    return this.contentItems.slice(start, start + 3);
  }

  nextSlide() {
    if (this.currentSlide < 2) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}