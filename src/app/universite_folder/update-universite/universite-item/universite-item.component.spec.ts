import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteItemComponent } from './universite-item.component';

describe('UniversiteItemComponent', () => {
  let component: UniversiteItemComponent;
  let fixture: ComponentFixture<UniversiteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
