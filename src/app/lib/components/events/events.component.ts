import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-16 bg-gradient-to-b from-white to-bg-[#f1f1f1]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex flex-row items-center justify-between mb-8 border-b border-gray-200 ">
      <div class="text-left mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2> 
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Discover our latest energy initiatives and community programs</p>
        </div>

        <a href="/events"  class="inline-block px-4 py-1 xl:py-3 xl:px-6 bg-[#F36E23] text-white uppercase font-medium border-2 border-transparent hover:border-[#F36E23] transition-all duration-300 hover:bg-white hover:text-[#F36E23] hover:shadow-sm">
       All Events
      </a>
</div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 border-b border-gray-200">
          @for (event of events(); track event.id) {
            <div class="group relative overflow-hidden  hover:border-b border-indigo  hover:shadow-sm transition-all duration-300 h-full flex flex-col">
              <div class="relative h-60 overflow-hidden">
                <img 
                  [src]="event.image" 
                  [alt]="event.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="inline-block px-3 py-1 bg-white/90 text-gray-900  text-sm font-medium">
                    {{ event.date }}
                  </span>
                </div>
              </div>
              
              <div class="p-6 flex-1 flex flex-col bg-white">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ event.title }}</h3>
                <p class="text-gray-600 mb-4 flex-1">{{ event.description }}</p>
                <a 
                  [routerLink]="event.link" 
                  class="inline-flex items-center text-orange-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn more
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          }
        </div>


      </div>
    </section>
  `,
  styles: [`
    .event-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .event-card:hover::before {
      opacity: 1;
    }
  `]
})
export class EventsComponent {
  events = signal([
    {
      id: 1,
      title: "Renewable Energy Forum",
      description: "Join industry leaders discussing Ghana's renewable energy future and investment opportunities.",
      date: "June 15, 2024",
      image: "/assets/images/event-energy-forum.jpg",
      link: "/events/energy-forum"
    },
    {
      id: 2,
      title: "Community Solar Workshop",
      description: "Hands-on training for communities interested in adopting solar power solutions.",
      date: "June 22, 2024",
      image: "/assets/images/event-solar-workshop.jpg",
      link: "/events/solar-workshop"
    },
    {
      id: 3,
      title: "Green Tech Expo",
      description: "Exhibition of cutting-edge sustainable technologies for homes and businesses.",
      date: "July 5-7, 2024",
      image: "/assets/images/event-tech-expo.jpg",
      link: "/events/green-tech-expo"
    }
  ]);
}