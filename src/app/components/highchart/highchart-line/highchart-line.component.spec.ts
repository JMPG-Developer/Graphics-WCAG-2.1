import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartLineComponent } from './highchart-line.component';

describe('HighChartLineComponent', () => {
  let component: HighchartLineComponent;
  let fixture: ComponentFixture<HighchartLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
