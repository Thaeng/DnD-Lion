import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoDisplayComponent } from './character-info-display.component';

describe('CharacterInfoDisplayComponent', () => {
  let component: CharacterInfoDisplayComponent;
  let fixture: ComponentFixture<CharacterInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
