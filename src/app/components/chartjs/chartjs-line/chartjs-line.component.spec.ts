import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJSLineComponent } from './chartjs-line.component';

describe('ChartJSLineComponent', () => {
  let component: ChartJSLineComponent;
  let fixture: ComponentFixture<ChartJSLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJSLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJSLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
