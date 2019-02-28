import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataButtonComponent } from './view-data-button.component';

describe('ViewDataButtonComponent', () => {
  let component: ViewDataButtonComponent;
  let fixture: ComponentFixture<ViewDataButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
