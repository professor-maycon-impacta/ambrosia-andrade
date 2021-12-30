import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompServiceComponent } from './comp-service.component';

describe('CompServiceComponent', () => {
  let component: CompServiceComponent;
  let fixture: ComponentFixture<CompServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
