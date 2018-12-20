import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModalButtonComponent } from './table-modal-button.component';

describe('TableModalButtonComponent', () => {
  let component: TableModalButtonComponent;
  let fixture: ComponentFixture<TableModalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableModalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
