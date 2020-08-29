import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailDisplayComponent } from './item-detail-display.component';

describe('ItemDetailDisplayComponent', () => {
  let component: ItemDetailDisplayComponent;
  let fixture: ComponentFixture<ItemDetailDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
