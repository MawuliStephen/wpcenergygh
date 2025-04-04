import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdinkraBackgroundComponent } from './adinkra-background.component';

describe('AdinkraBackgroundComponent', () => {
  let component: AdinkraBackgroundComponent;
  let fixture: ComponentFixture<AdinkraBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdinkraBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdinkraBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
