import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubStatDisplayComponent } from './sub-stat-display.component';

describe('SubStatDisplayComponent', () => {
  let component: SubStatDisplayComponent;
  let fixture: ComponentFixture<SubStatDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStatDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubStatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
