import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementReactiveComponent } from './departement-reactive.component';

describe('DepartementReactiveComponent', () => {
  let component: DepartementReactiveComponent;
  let fixture: ComponentFixture<DepartementReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
