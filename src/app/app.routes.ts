import { Routes } from '@angular/router';
import { IndexComponent } from './lib/views/public/index/index.component';
import { PublicComponent } from './lib/layouts/public/public.component';
import { ContactComponent } from './lib/views/public/contact/contact.component';
import { AboutComponent } from './lib/views/public/about/about.component';
import { MembershipComponent } from './lib/views/public/membership/membership.component';
import { CommitteesComponent } from './lib/views/public/committees/committees.component';
import { NotefoundComponent } from './lib/views/public/notefound/notefound.component';


export const routes: Routes = [
    // Parent route with a layout wrapper
    {
      path: '', 
      component: PublicComponent, 
      children: [
        { path: '', component: IndexComponent,
          data: { 
            title: 'Home',
            description: 'Learn about WPC Energy Ghana and our mission',
            keywords: 'about, company, mission, Ghana energy',
            ogTitle: 'About WPC Energy Ghana',
            ogImage: 'https://yourdomain.com/about-image.jpg'
          }
        },  // Home page route
        
        { path: 'contact', component: ContactComponent,
          data: { 
            title: 'Contact',
            description: 'Learn about WPC Energy Ghana and our mission',
            keywords: 'about, company, mission, Ghana energy',
            ogTitle: 'About WPC Energy Ghana',
            ogImage: 'https://yourdomain.com/about-image.jpg'
          }
        },
        { path: 'about', component: AboutComponent,
          data: { 
            title: 'about',
            description: 'Learn about WPC Energy Ghana and our mission',
            keywords: 'about, company, mission, Ghana energy',
            ogTitle: 'About WPC Energy Ghana',
            ogImage: 'https://yourdomain.com/about-image.jpg'
          }
        },
        { path: 'about/membership', component: MembershipComponent,
          data: { 
            title: 'about',
            description: 'Learn about WPC Energy Ghana and our mission',
            keywords: 'about, company, mission, Ghana energy',
            ogTitle: 'About WPC Energy Ghana',
            ogImage: 'https://yourdomain.com/about-image.jpg'
          }
        },
        { path: 'about/committees', component: CommitteesComponent,
          data: { 
            title: 'About | Committees',
            description: 'Learn about WPC Energy Ghana and our mission',
            keywords: 'about, company, mission, Ghana energy',
            ogTitle: 'About WPC Energy Ghana',
            ogImage: 'https://yourdomain.com/about-image.jpg'
          }
        },




        {
          path: 'oops',
          component: NotefoundComponent,
          data: { /* SEO data for 404 page */ }
        },
        // Wildcard route redirects to not-found
        { path: '**', redirectTo: 'oops' }

      ]
    }
  ];