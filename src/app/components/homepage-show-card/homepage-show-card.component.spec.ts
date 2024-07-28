import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageShowCardComponent } from './homepage-show-card.component';

describe('HomepageShowCardComponent', () => {
  let component: HomepageShowCardComponent;
  let fixture: ComponentFixture<HomepageShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageShowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
