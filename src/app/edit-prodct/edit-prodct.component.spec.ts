import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdctComponent } from './edit-prodct.component';

describe('EditProdctComponent', () => {
  let component: EditProdctComponent;
  let fixture: ComponentFixture<EditProdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
