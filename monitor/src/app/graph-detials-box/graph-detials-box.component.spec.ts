import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDetialsBoxComponent } from './graph-detials-box.component';

describe('GraphDetialsBoxComponent', () => {
  let component: GraphDetialsBoxComponent;
  let fixture: ComponentFixture<GraphDetialsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDetialsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDetialsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
