import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPublicationsSliderComponent } from './news-publications-slider.component';

describe('NewsPublicationsSliderComponent', () => {
  let component: NewsPublicationsSliderComponent;
  let fixture: ComponentFixture<NewsPublicationsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPublicationsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPublicationsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
