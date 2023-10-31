import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratItemComponent } from './contrat-item.component';

describe('ContratItemComponent', () => {
  let component: ContratItemComponent;
  let fixture: ComponentFixture<ContratItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
