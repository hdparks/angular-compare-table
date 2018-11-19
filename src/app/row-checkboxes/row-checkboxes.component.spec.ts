import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCheckboxesComponent } from './row-checkboxes.component';

describe('RowCheckboxesComponent', () => {
  let component: RowCheckboxesComponent;
  let fixture: ComponentFixture<RowCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
