import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeersComponent } from './our-beers.component';

describe('OurBeersComponent', () => {
  let component: OurBeersComponent;
  let fixture: ComponentFixture<OurBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
