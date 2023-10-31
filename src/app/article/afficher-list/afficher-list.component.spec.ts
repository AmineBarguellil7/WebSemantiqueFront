import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherListComponent } from './afficher-list.component';

describe('AfficherListComponent', () => {
  let component: AfficherListComponent;
  let fixture: ComponentFixture<AfficherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
