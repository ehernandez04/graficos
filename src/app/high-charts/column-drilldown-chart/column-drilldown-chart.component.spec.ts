import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDrilldownChartComponent } from './column-drilldown-chart.component';

describe('ColumnDrilldownChartComponent', () => {
  let component: ColumnDrilldownChartComponent;
  let fixture: ComponentFixture<ColumnDrilldownChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDrilldownChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnDrilldownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
