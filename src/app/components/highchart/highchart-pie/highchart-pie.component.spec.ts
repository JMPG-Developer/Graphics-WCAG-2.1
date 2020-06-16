import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartPieComponent } from './highchart-pie.component';

describe('HighchartPieComponent', () => {
  let component: HighchartPieComponent;
  let fixture: ComponentFixture<HighchartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
