import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodItemComponent } from './edit-food-item.component';

describe('EditFoodItemComponent', () => {
  let component: EditFoodItemComponent;
  let fixture: ComponentFixture<EditFoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
