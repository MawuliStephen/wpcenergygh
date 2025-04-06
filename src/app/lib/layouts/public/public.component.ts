import { Component } from '@angular/core';
import { NavTopComponent } from '../../components/public/nav-top/nav-top.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/public/footer/footer.component';

@Component({
  selector: 'app-public',
  imports: [ 
    NavTopComponent, RouterOutlet,
    FooterComponent
  ],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {

}
