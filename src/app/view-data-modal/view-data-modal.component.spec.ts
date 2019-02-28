import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataModalComponent } from './view-data-modal.component';

describe('ViewDataModalComponent', () => {
  let component: ViewDataModalComponent;
  let fixture: ComponentFixture<ViewDataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
