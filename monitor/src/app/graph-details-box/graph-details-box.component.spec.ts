import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDetailsBoxComponent } from './graph-details-box.component';

describe('GraphDetailsBoxComponent', () => {
  let component: GraphDetailsBoxComponent;
  let fixture: ComponentFixture<GraphDetailsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDetailsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
