//indexComponent.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from "../../../components/hero-slider/hero-slider.component";
import { EventsComponent } from "../../../components/events/events.component";
import { AdinkraBackgroundComponent } from "../../../components/adinkra-background/adinkra-background.component";
import { NewsPublicationsSliderComponent } from "../../../components/news-publications-slider/news-publications-slider.component";

@Component({
  selector: 'app-index',
  imports: [CommonModule, HeroSliderComponent, EventsComponent, AdinkraBackgroundComponent, NewsPublicationsSliderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
