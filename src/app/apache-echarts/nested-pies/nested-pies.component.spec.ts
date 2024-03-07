import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPiesComponent } from './nested-pies.component';

describe('NestedPiesComponent', () => {
  let component: NestedPiesComponent;
  let fixture: ComponentFixture<NestedPiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedPiesComponent]
    });
    fixture = TestBed.createComponent(NestedPiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
