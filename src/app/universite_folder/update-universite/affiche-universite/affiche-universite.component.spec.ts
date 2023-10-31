import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheUniversiteComponent } from './affiche-universite.component';

describe('AfficheUniversiteComponent', () => {
  let component: AfficheUniversiteComponent;
  let fixture: ComponentFixture<AfficheUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
