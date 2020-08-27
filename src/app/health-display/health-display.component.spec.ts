import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDisplayComponent } from './health-display.component';

describe('HealthDisplayComponent', () => {
  let component: HealthDisplayComponent;
  let fixture: ComponentFixture<HealthDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
