import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisAddComponent } from './avis-add.component';

describe('AvisAddComponent', () => {
  let component: AvisAddComponent;
  let fixture: ComponentFixture<AvisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
