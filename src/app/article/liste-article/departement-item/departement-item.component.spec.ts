import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementItemComponent } from './departement-item.component';

describe('DepartementItemComponent', () => {
  let component: DepartementItemComponent;
  let fixture: ComponentFixture<DepartementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
