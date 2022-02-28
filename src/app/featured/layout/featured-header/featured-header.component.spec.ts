import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHeaderComponent } from './featured-header.component';

describe('FeaturedHeaderComponent', () => {
  let component: FeaturedHeaderComponent;
  let fixture: ComponentFixture<FeaturedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
