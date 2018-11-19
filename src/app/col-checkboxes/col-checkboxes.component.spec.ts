import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColCheckboxesComponent } from './col-checkboxes.component';

describe('ColCheckboxesComponent', () => {
  let component: ColCheckboxesComponent;
  let fixture: ComponentFixture<ColCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
