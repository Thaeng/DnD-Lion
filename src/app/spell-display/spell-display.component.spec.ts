import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDisplayComponent } from './spell-display.component';

describe('SpellDisplayComponent', () => {
  let component: SpellDisplayComponent;
  let fixture: ComponentFixture<SpellDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
