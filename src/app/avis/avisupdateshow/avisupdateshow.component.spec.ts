import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisupdateshowComponent } from './avisupdateshow.component';

describe('AvisupdateshowComponent', () => {
  let component: AvisupdateshowComponent;
  let fixture: ComponentFixture<AvisupdateshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisupdateshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisupdateshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
