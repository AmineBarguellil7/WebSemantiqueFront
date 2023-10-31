import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeItemComponent } from './equipe-item.component';

describe('EquipeItemComponent', () => {
  let component: EquipeItemComponent;
  let fixture: ComponentFixture<EquipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
