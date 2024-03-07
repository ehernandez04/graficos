import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDataLabelsChartComponent } from './column-data-labels-chart.component';

describe('ColumnDataLabelsChartComponent', () => {
  let component: ColumnDataLabelsChartComponent;
  let fixture: ComponentFixture<ColumnDataLabelsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDataLabelsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnDataLabelsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
