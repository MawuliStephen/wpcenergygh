// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
// import { Title, Meta } from '@angular/platform-browser';
// import { filter } from 'rxjs/operators';
// import * as AOS from 'aos';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   baseTitle = 'WPC Energy Ghana';

//   constructor(
//     private router: Router,
//     private titleService: Title,
//     private metaService: Meta
//   ) {}

//   ngOnInit() {
//     this.initializeAOS();
//     this.setupRouteChangeListener();
//   }

//   private initializeAOS(): void {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true,
//       offset: 100,
//       disable: window.innerWidth < 768 // Disable on mobile if needed
//     });
//   }

//   private setupRouteChangeListener(): void {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => {
//       this.updateMetadata();
//       this.refreshAOS(); // Refresh AOS after route change
//     });
//   }

//   private updateMetadata(): void {
//     const currentRoute = this.getCurrentRoute();
//     const routeData = currentRoute?.data || {};
    
//     // Set dynamic title
//     const pageTitle = routeData['title'] || this.getRouteName(currentRoute);
//     this.titleService.setTitle(`${this.baseTitle} | ${pageTitle}`);
    
//     // Update meta tags
//     this.updateMetaTags(routeData);
//   }

//   private getCurrentRoute(): any {
//     let route = this.router.routerState.snapshot.root;
//     while (route.firstChild) {
//       route = route.firstChild;
//     }
//     return route;
//   }

//   private getRouteName(route: any): string {
//     return route?.routeConfig?.path?.replace(/-/g, ' ') || 'Home';
//   }

//   private updateMetaTags(routeData: any): void {
//     const defaultMeta = {
//       description: 'WPC Energy Ghana - Leading energy solutions provider',
//       keywords: 'energy, Ghana, power solutions, renewable energy',
//       ogTitle: this.baseTitle,
//       ogDescription: 'Innovative energy solutions for Ghana',
//       ogImage: '/assets/images/og-default.jpg',
//       ogUrl: window.location.href
//     };

//     // Standard meta tags
//     this.metaService.updateTag({ name: 'description', content: routeData['description'] || defaultMeta.description });
//     this.metaService.updateTag({ name: 'keywords', content: routeData['keywords'] || defaultMeta.keywords });
    
//     // Open Graph/Facebook meta tags
//     this.metaService.updateTag({ property: 'og:title', content: routeData['ogTitle'] || defaultMeta.ogTitle });
//     this.metaService.updateTag({ property: 'og:description', content: routeData['ogDescription'] || defaultMeta.ogDescription });
//     this.metaService.updateTag({ property: 'og:image', content: routeData['ogImage'] || defaultMeta.ogImage });
//     this.metaService.updateTag({ property: 'og:url', content: defaultMeta.ogUrl });
    
//     // Twitter meta tags
//     this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
//   }

//   private refreshAOS(): void {
//     setTimeout(() => {
//       AOS.refresh();
//     }, 100);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser'; // <-- Added Meta
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseTitle = 'WPC Energy Ghana';

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta  // <-- Injected Meta service
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMetadata();
    });
  }

  private updateMetadata() {
    const currentRoute = this.getCurrentRoute();
    const routeData = currentRoute?.data || {};
    
    // Set Title
    const pageTitle = routeData['title'] || currentRoute?.routeConfig?.path || 'Home';
    this.titleService.setTitle(`${this.baseTitle} | ${pageTitle}`);
    
    // Set Meta Tags
    this.updateMetaTags(routeData);
  }

  private getCurrentRoute() {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private updateMetaTags(routeData: any) {
    // Default meta tags
    const defaultMeta = {
      description: 'WPC Energy Ghana - Leading energy solutions provider',
      keywords: 'energy, Ghana, power, solutions',
      ogTitle: this.baseTitle,
      ogDescription: 'Innovative energy solutions for Ghana',
      ogImage: 'https://yourdomain.com/default-image.jpg'
    };

    // Update meta tags
    this.metaService.updateTag({ name: 'description', content: routeData['description'] || defaultMeta.description });
    this.metaService.updateTag({ name: 'keywords', content: routeData['keywords'] || defaultMeta.keywords });
    
    // Open Graph / Social Media meta tags
    this.metaService.updateTag({ property: 'og:title', content: routeData['ogTitle'] || defaultMeta.ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: routeData['ogDescription'] || defaultMeta.ogDescription });
    this.metaService.updateTag({ property: 'og:image', content: routeData['ogImage'] || defaultMeta.ogImage });
  }
}
