import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatDisplayComponent } from './main-stat-display.component';

describe('MainStatDisplayComponent', () => {
  let component: MainStatDisplayComponent;
  let fixture: ComponentFixture<MainStatDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
