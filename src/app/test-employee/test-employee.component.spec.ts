import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmployeeComponent } from './test-employee.component';

describe('TestEmployeeComponent', () => {
  let component: TestEmployeeComponent;
  let fixture: ComponentFixture<TestEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
