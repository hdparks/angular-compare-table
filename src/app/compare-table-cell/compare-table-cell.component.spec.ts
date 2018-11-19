import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTableCellComponent } from './compare-table-cell.component';

describe('CompareTableCellComponent', () => {
  let component: CompareTableCellComponent;
  let fixture: ComponentFixture<CompareTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
