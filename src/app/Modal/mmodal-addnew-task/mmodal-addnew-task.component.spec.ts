import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmodalAddnewTaskComponent } from './mmodal-addnew-task.component';

describe('MmodalAddnewTaskComponent', () => {
  let component: MmodalAddnewTaskComponent;
  let fixture: ComponentFixture<MmodalAddnewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmodalAddnewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmodalAddnewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
