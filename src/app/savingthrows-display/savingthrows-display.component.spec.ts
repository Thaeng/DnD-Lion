import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingthrowsDisplayComponent } from './savingthrows-display.component';

describe('SavingthrowsDisplayComponent', () => {
  let component: SavingthrowsDisplayComponent;
  let fixture: ComponentFixture<SavingthrowsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingthrowsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingthrowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
