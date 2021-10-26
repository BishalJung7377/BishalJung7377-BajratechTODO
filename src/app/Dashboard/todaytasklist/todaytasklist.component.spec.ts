import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaytasklistComponent } from './todaytasklist.component';

describe('TodaytasklistComponent', () => {
  let component: TodaytasklistComponent;
  let fixture: ComponentFixture<TodaytasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaytasklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaytasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
